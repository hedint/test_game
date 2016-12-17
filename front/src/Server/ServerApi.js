class ServerApi {
    constructor () {
        this.storage = window.localStorage;
        this.STORAGE_KEY = 'FKU_DATA';
    }
    getAllData () {
        let data = this.storage.getItem(this.STORAGE_KEY);
        if (data) {
            return  JSON.parse(data);
        }
        return this.getDefaultState();
    }

    getDefaultState () {
        return {
            'children' : [],
            'tests' : [],
            'med_examinations' : []
        }
    }

    saveAllData (data) {
        if (!data) {
            data = this.getDefaultState();
        }
        this.storage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }
    getChildren (callback) {
        var data = this.getAllData();
        callback(this.successResponse(data.children));
    }
    getChild (child_id, callback) {
        let child_index = this.findChild(child_id);
        if (child_index !== -1) {
            var data = this.getAllData();
            callback(this.successResponse(data.children[child_index]));
        }
        return false;
    }
    addChild (child, callback) {
        let data = this.getAllData();
        if (data.children.length) {
            child.id = data.children[data.children.length - 1].id + 1;
        } else {
            child.id = 1;
        }
        data.children.push(child);
        this.saveAllData(data);
        callback(this.successResponse(data.children));
    }
    editChild (child, callback) {
        let child_index = this.findChild(child.id);
        if (child_index !== -1) {
            let data = this.getAllData();
            data.children[child_index] = child;
            this.saveAllData(data);
            callback(this.successResponse(data.children));
        }
    }
    deleteChild(id, callback) {
        let data = this.getAllData();
        let child_index = this.findChild(id);
        if (child_index !== -1) {
            data.children.splice(child_index, 1);
            this.saveAllData(data);
            callback(this.successResponse(data.children));
        }
    }

    findChild (id) {
        let data = this.getAllData();
        return this.findInListAbstract(id, data.children, 'id');
    }


    getChildTests (callback) {
        var data = this.getAllData();
        callback(this.successResponse(data.tests));
    }

    addChildTest (child_test, callback) {
        let data = this.getAllData();
        if (!data.tests) {
            data.tests = [];
        }
        if (data.tests.length) {
            child_test.id = data.tests[data.tests.length - 1].id + 1;
        } else {
            child_test.id = 1;
        }
        data.tests.push(child_test);
        this.saveAllData(data);
        callback(this.successResponse(data.tests));
    }

    editChildTest (child_test, callback) {
        let data = this.getAllData();
        let index = this.findInListAbstract(child_test.id, data.tests, 'id');
        if (index !== -1) {
            data.tests[index] = child_test;
            this.saveAllData(data);
            callback(this.successResponse(data.tests));
        }
    }

    getChildTest (id, callback) {
        let data = this.getAllData();
        let index = this.findInListAbstract(id, data.tests, 'id');
        if (index !== -1) {
            callback(this.successResponse(data.tests[index]));
        }
        return false;
    }

    deleteChildTest(id, callback) {
        let data = this.getAllData();
        let index = this.findInListAbstract(id, data.tests, 'id');
        if (index !== -1) {
            data.tests.splice(index, 1);
            this.saveAllData(data);
            callback(this.successResponse(data.tests));
        }
    }


    addMedExamination (med_examination, callback) {
        let data = this.getAllData();
        if (!data.med_examinations) {
            data.med_examinations = [];
        }
        if (data.med_examinations.length) {
            med_examination.id = data.med_examinations[data.med_examinations.length - 1].id + 1;
        } else {
            med_examination.id = 1;
        }

        data.med_examinations.push(med_examination);
        this.saveAllData(data);
        callback(this.successResponse(data.med_examinations));
    }

    editMedExamination (med_examination, callback) {
        let data = this.getAllData();
        let index = this.findInListAbstract(med_examination.id, data.med_examinations, 'id');
        if (index !== -1) {
            data.med_examinations[index] = med_examination;
            this.saveAllData(data);
            callback(this.successResponse(data.med_examinations));
        }
    }

    getMedExamination (id, callback) {
        let data = this.getAllData();
        let index = this.findInListAbstract(id, data.med_examinations, 'id');
        if (index !== -1) {
            callback(this.successResponse(data.med_examinations[index]));
        }
        return false;
    }

    getMedExaminations (callback) {
        var data = this.getAllData();
        callback(this.successResponse(data.med_examinations));
    }

    deleteMedExamination(id, callback) {
        let data = this.getAllData();
        let index = this.findInListAbstract(id, data.med_examinations, 'id');
        if (index !== -1) {
            data.med_examinations.splice(index, 1);
            this.saveAllData(data);
            callback(this.successResponse(data.med_examinations));
        }
    }

    findInListAbstract (needed_value, list_of_smth, id_property ) {
        let needed_index  = -1;
        list_of_smth.forEach((item, index) => {
            if (item[id_property] == needed_value) {
                needed_index = index;
                return null;
            }
        });
        return needed_index;
    }

    successResponse (data) {
        return {
            'error': false,
            'message' : '',
            'data' : data
        }
    }

}
export default ServerApi;