

export function getData() {
    return function(target: any, property: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        if (typeof original === 'function') {
            descriptor.value = function(...args: any[]) {
                try {
                    const result = original.apply(this, args);
                    return new Promise((resolve, reject) => { 
                        result.then((res: any) => {
                            resolve(res.data.data)
                        }).catch((err: any) => {
                            reject(err)
                        })
                    })
                } catch (e) {
                    console.log("Error decorator: ", e)
                }
            }
        }
        return descriptor;
    }
}