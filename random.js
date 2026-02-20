export function random ()
{
    let random = {

        num: function (x, y) {
            return Math.floor(Math.random() * y) + x
        },
        bool: function () {
            return Math.round(Math.random() )  === 1
        },
        element: {
            gen: function (x, y) {
                if (x === undefined || y === undefined) {

                    return 0
                }

                let r  = random.num(0, y)


                return x[r]
            },
            arrgen: function (x, y,z) {
                let arr = []
                for (let i = 0; i < x; i++) {
                    arr.push(random.element.gen(y,z))
                }
                return arr
            }

        },
        arr: function (x,save,numx,numy,array,arrY,saveSettengs1,saveSettengs2,objX) {
            if (saveSettengs1 === undefined) {
                saveSettengs1 = 0
            }else {
                saveSettengs1 = Math.floor(saveSettengs1)
            }
            if (saveSettengs2 === undefined) {
                saveSettengs2 = 3
            } else {
                saveSettengs2 = Math.floor(saveSettengs2)
            }
            let a = []
            let b = 5



            if (save) {
                b = 3
            }
            for (let i = 0; i < x; i++) {
                let c = random.num(1,b)
                switch (c) {
                    case 1:
                        a.push(random.num(numx, numy))
                        break;
                    case 2:
                        a.push(random.element.gen(array,arrY))
                        break;
                    case 3:
                        a.push(random.bool())
                        break;
                    case 4:
                        if (saveSettengs1 <= saveSettengs2) {
                            a.push(random.arr(x, save, numx, numy, array, arrY,saveSettengs1 + 1,saveSettengs2))
                        }else {
                            a.push(random.arr(x, true, numx, numy, array, arrY,saveSettengs1 + 1,saveSettengs2))
                        }
                        break;
                    case 5:
                        if (saveSettengs1 <= saveSettengs2) {
                            a.push(random.obj(x,objX, save, numx, numy, array, arrY,false,saveSettengs1 + 1,saveSettengs2))
                        }else {
                            a.push(random.obj(x,objX, true, numx, numy, array, arrY ,false,saveSettengs1 + 1,saveSettengs2))
                        }
                        break;
                }
            }
            return a

        },
        obj: function (x,y,save,numx,numy,array,arrY,abus=false,saveSettengs1,saveSettengs2) {

            if (saveSettengs1 === undefined) {
                saveSettengs1 = 0
            }else {
                saveSettengs1 = Math.floor(saveSettengs1)
            }
            if (saveSettengs2 === undefined) {
                saveSettengs2 = 3
            } else {
                saveSettengs2 = Math.floor(saveSettengs2)
            }
            let rez = {}
            for (let i = 0; i < x; i++) {
                if (saveSettengs1 <= saveSettengs2) {
                    if (abus) {
                        rez[random.arr(1, true, numx, numy, array, arrY)[0]] = random.arr(random.num(1, y), save, numx, numy, array, arrY, saveSettengs1, saveSettengs2,x)
                    } else {
                        rez[random.arr(1, true, numx, numy, array, arrY)[0]] = random.arr(y, save, numx, numy, array, arrY, saveSettengs1, saveSettengs2,x)
                    }
                }
            }
            return rez
        }
    }
    return random
}