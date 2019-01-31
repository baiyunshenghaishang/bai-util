<template>
    <div>
        <input type="text" v-model="time" />
        <div>
            <span>格式化后时间</span>
            <span>{{ formatTime }}</span>
        </div>
    </div>
</template>

<script>
import { formatTime } from '../source/index.js'

export default {
    name: 'Format',
    data() {
        return {
            time: '',
        }
    },
    computed: {
        formatTime() {
            return formatTime(+new Date(this.time || Date.now()))
        },
    },
}
</script>
