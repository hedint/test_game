class PfcByAge {
    constructor () {

        if (PfcByAge.instance) {
            return PfcByAge.instance;
        }
        PfcByAge.instance = this;
        this.data = this.getInitData();
    }

    getData(full_months) {
        let result = false;
        this.data.forEach( (interval) => {
            if (full_months >= interval.startMonth && full_months < interval.endMonth) {
                result = interval.data;
                return null;
            }
        });
        return result;
    }

    calculateDailyDemand (full_months, weight) {
        let data = Object.assign({}, this.getData(full_months));
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                data[key] = weight * data[key];
            }
        }
        return data;

    }

    getInitData () {
        return [
            {
                startMonth : 0,
                endMonth : 3,
                data : {
                    protein : 2.2,
                    fat: 6.5,
                    carb: 13,
                    fa : 60,
                    tyrosine : 150,
                    calories : 115
                }
            },
            {
                startMonth : 3,
                endMonth : 6,
                data : {
                    protein : 2.6,
                    fat: 6,
                    carb: 13,
                    fa : 50,
                    tyrosine : 145,
                    calories : 115
                }
            },
            {
                startMonth : 6,
                endMonth : 9,
                data : {
                    protein : 2.9,
                    fat: 5.5,
                    carb: 13,
                    fa : 40,
                    tyrosine : 130,
                    calories : 110
                }
            },
            {
                startMonth : 9,
                endMonth : 12,
                data : {
                    protein : 3.3,
                    fat: 5.5,
                    carb: 13,
                    fa : 40,
                    tyrosine : 130,
                    calories : 110
                }
            },
            {
                startMonth : 12,
                endMonth : 18,
                data : {
                    protein : 3.3,
                    fat: 4.8,
                    carb: 16,
                    fa : 33,
                    tyrosine : 100,
                    calories : 115
                }
            },
            {
                startMonth : 18,
                endMonth : 24,
                data : {
                    protein : 3.3,
                    fat : 4.8,
                    carb : 17.5,
                    fa : 28,
                    tyrosine : 100,
                    calories : 106
                }
            },
            {
                startMonth : 24,
                endMonth : 30,
                data : {
                    protein : 3.3,
                    fat : 4.8,
                    carb : 17.5,
                    fa : 28,
                    tyrosine : 100,
                    calories : 106
                }
            },
            {
                startMonth : 30,
                endMonth : 36,
                data : {
                    protein : 3.3,
                    fat : 4.8,
                    carb : 17.5,
                    fa : 28,
                    tyrosine : 100,
                    calories : 106
                }
            }
        ];
    }
}

export default PfcByAge;