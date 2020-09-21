import validate from "validate.js"

const validator = (values) => {
    let constraints = {
        title: {
            presence: false,
        },
        message: {
            presence: true,
        },
        when: {
            presence: false,
        },
        network: {
            presence: true,
        },
        
    }
    // IMPORTANT: values is an Immutable.Map here!
    const errors = {}
    let errorsArray = validate(
        {
            title: values.get("title"),
            message: values.get("message"),
            when: values.get("when"),
            network: values.get("network"),
        },
        constraints
    )
    if (errorsArray !== undefined) {
        if (errorsArray["title"] !== undefined) {
            errors.title = errorsArray["title"][0]
        }
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
