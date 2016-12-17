
class DataScheme {
    constructor (data_values = false) {
        this.data = this.createDefaultScheme();
        if (data_values) {
            this.parseValues(data_values);
        }
    }


    setValues (data_values) {
        this.parseValues(data_values);
    }

    parseValues  (data_values) {
        console.log(data_values);
        for (let key in this.data) {
            if (this.data.hasOwnProperty(key) && data_values.hasOwnProperty(key)) {
                this.data[key].value = data_values[key];
            }
        }
    }

    getParamList () {
        let param_list = [];
        for (let key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                param_list.push(key);
            }
        }
        return param_list;
    }


    getScheme () {
        return {
            data : this.data,
            data_list : this.getParamList()
        }
    }

    createDefaultScheme () {
        //abstract
    }




}
export default DataScheme;