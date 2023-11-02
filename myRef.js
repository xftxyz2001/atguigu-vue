function vue2ref(obj) {
    const newObj = {}
    Object.keys(obj).forEach(key => {
        Object.defineProperty(newObj, key, {
            get() {
                return obj[key]
            },
            set(val) {
                console.log('set', key, val)
                obj[key] = val
            },
            configurable: true, // 可配置（删除）
            enumerable: true // 可枚举（for...in）
        })
    })
    return newObj
}

function vue3ref(obj) {
    const newObj = new Proxy(obj, {
        get(target, key) {
            return target[key]
        },
        set(target, key, val) {
            console.log('set', key, val)
            target[key] = val
        },
        deleteProperty(target, key) {
            console.log('delete', key)
            delete target[key]
        }
    })
    return newObj
}