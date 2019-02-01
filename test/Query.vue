<template>
    <div>
        <div>url</div>
        <input type="text" v-model="url" />
        <div>name</div>
        <input type="text" v-model="name" />
        <div>
            <span>getQuery结果</span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>

<script>
import { getQuery } from '../source/index.js'

export default {
    name: 'Query',
    data() {
        return {
            url: '',
            name: '',
        }
    },
    computed: {
        result() {
            return getQuery(this.name, this.url)
        },
    },
}
</script>
