<template>
    <div>
        <div class="mt20">
            <input type="text" v-model="idcard" />
            <div>
                <span>是否是身份证号</span>
                <span>{{ isIdcard }}</span>
            </div>
        </div>
        <div class="mt20">
            <input type="text" v-model="mobile" />
            <div>
                <span>是否是手机号</span>
                <span>{{ isMobile }}</span>
            </div>
        </div>
        <div class="mt20">
            <input type="text" v-model="number" />
            <div>
                <span>是否是数字</span>
                <span>{{ isNumber }}</span>
            </div>
        </div>
        <div class="mt20">
            <input type="text" v-model="email" />
            <div>
                <span>是否是邮箱</span>
                <span>{{ isEmail }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { isIdcard, isMobile, isNumber, isEmail } from '../source/index.js'

export default {
    name: 'Validate',
    created() {},
    data() {
        return {
            idcard: '',
            mobile: '',
            number: '',
            email: '',
        }
    },
    computed: {
        isIdcard() {
            return isIdcard(this.idcard)
        },
        isMobile() {
            return isMobile(this.mobile)
        },
        isNumber() {
            return isNumber(this.number)
        },
        isEmail() {
            return isEmail(this.email)
        },
    },
}
</script>

<style lang="scss" scoped>
.mt20 {
    margin-top: 20px;
}
</style>
