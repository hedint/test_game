const ruText = {
    required : () => 'Поле обязательно',
    len : (params = {} ) => {
        let {min, max} = params;
        let min_text = (min) ? `не менее ${min} символов`: '';
        let max_text = (max) ? `не более ${max} символов ` : '';
        max_text = (max && min)? 'и '+ max_text : max_text;
        return `Поле должно содержать ${min_text} ${max_text}`;
    },
    number : () => 'Должно быть числом'
};

const enText = {
    required : () => 'Field is required',
    len : (params = {} ) => {
        let {min, max} = params;
        let max_text = (max) ? `and less than ${max} characters ` : '';
        let min_text = (min) ? `more than ${min} characters`: '';
        return `Text must contain ${min_text} ${max_text}`;
    },
    number : () => 'Must be a number'
};

class ValidationText {
    constructor (locale = 'ru') {
        this.locales = {
            ru : ruText,
            en : enText
        };
        this.current_locale = locale;
    }

    getMessage (message_code, params = {}) {
        return this.locales[this.current_locale][message_code](params);
    }
}

export default ValidationText;