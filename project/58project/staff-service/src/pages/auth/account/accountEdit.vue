<template>
    <div class="account-edit">
        <el-form
            class="form-style"
            ref="form"
            :rules="accountRules"
            :model="accountForm"
            label-width="120px">
            <el-form-item label="账号"  prop="account">
                <el-input v-model="accountForm.account" :maxlength="20" :disabled="$route.query.type == 1" ></el-input>
            </el-form-item>
            
            <el-form-item label="用户名" prop="username">
                <el-input autocomplete="off" v-model="accountForm.username" :maxlength="20"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input :maxlength="50" autocomplete="new-password"  v-model="accountForm.password" type="password"></el-input>
            </el-form-item>
            
            <el-form-item label="确认密码" prop="repassword">
                <el-input :maxlength="50" v-model="accountForm.repassword" @focus.native="this.type='password'" type="text"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                <el-button @click="$router.go(-1)">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {authService} from '../../../../common'
export default {
    data(){
        const validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.accountForm.repassword !== '') {
                    this.$refs.form.validateField('repassword');
                }
                callback();
            }
        };
        const validateRePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.accountForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        const validateAccount = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号名'));
            } else {
                callback();
            }
        }
        const validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        }
        return {
            //账户信息
            accountForm: {
                id: this.$route.query.id ? this.$route.query.id : '',
                account: '',
                username: '', //用户名
                password: '', //密码
                repassword: '',//确认密码
            },
            accountRules: {
                account: [
                    { validator: validateAccount, trigger: 'blur' }
                ],
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
                repassword: [
                    { validator: validateRePassword, trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        async onSubmit(formName){
            let accountObj = {}
            if(this.$route.query.type == 1){
                accountObj = {
                    id: this.$route.query.id,
                    name: this.accountForm.username,
                    password: this.accountForm.password,
                    repassword: this.accountForm.repassword,
                }
            } else {
                accountObj = {
                    account: this.accountForm.account,
                    name: this.accountForm.username,
                    password: this.accountForm.password,
                    repassword: this.accountForm.repassword,
                }
            }
            await this.$refs[formName].validate((valid) => {
                if (valid) {
                    authService.editManager(accountObj)
                    .then(data =>{
                        if(data.code == '0'){
                            this.$message({
                                type: "success",
                                message: data.message
                            })
                            this.$router.push("/auth/accountList")
                        }
                    }).catch(error =>{
                        this.$message({
                            type: "error",
                            message: error.message
                        })
                    })
                } else {
                    return false;
                }
            });
        }
    },
    async mounted(){
        
        //若是编辑，请求编辑数据
        if(this.$route.query.type == 1){
            store.commit('setLoading',true)
            try{
                await authService.getManager(this.$route.query.id)
                    .then(data =>{
                        if(data.code == '0'){
                            this.accountForm.username = data.data.name
                            this.accountForm.account = data.data.account
                        }
                    }).catch(error =>{
                        if(error.code == "1"){
                            this.$message({
                                type: 'error',
                                message: error.message
                            })
                            this.$router.push('/auth/accountList')
                        }
                    }).finally(() =>{
                        store.commit('setLoading',false)
                    })
            } catch(error){
                this.$message({
                    type: 'error',
                    message: error.message
                })
            }

        }

    }
}
</script>
<style lang="scss" scoped>
    .account-edit{
        padding: 30px;
        .form-style{
            width: 600px;
        }
    }
</style>

