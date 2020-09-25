import { parse, parseISO, subMinutes } from "date-fns"
import { formatISO } from "date-fns/esm"
import validate from "validate.js"

/**
 * We adjust our DateTime checking, 
 * DatePicker onBlur => returns String, onChange=> Returns Date Time Object
 * We work with date-fns to keep it simple with JS Date Objects
 */
validate.extend(validate.validators.datetime, {
    parse: function(value, options){
        console.log("in parsing, ", value, typeof value)
        return value
    },

    format: function(value, options) {
        return formatISO(value)
    }
})

const validator = (values) => {
    let constraints = {
        message: {
            presence: true,
        },
        when: {
            presence: false,
            datetime: {
                dateOnly: false, 
                earliest: new Date(), 
                message: "Date and Time need to be in the future."
            }
        },
        network: {
            presence: true,
        },
        
    }
    // IMPORTANT: values is an Immutable.Map here!
    const errors = {}
    let errorsArray = validate(
        {
            message: values.get("message"),
            when: values.get("when"),
            network: values.get("network"),
        },
        constraints
    )
    if (errorsArray !== undefined) {
        if (errorsArray["message"] !== undefined) {
            errors.message = errorsArray["message"][0]
        }
        if (errorsArray["when"] !== undefined) {
            errors.when = errorsArray["when"][0]
        }
        if (errorsArray["network"] !== undefined) {
            errors.network = errorsArray["network"][0]
        }
    }

    return errors
}

export default validator
