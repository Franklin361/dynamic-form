import * as Yup from "yup";
import { forms } from './forms';

type Form = 'login'

export const getInputs = (section: Form) => {
    let initialValues: { [key: string]: any } = {};
    let requiredFields: { [key: string]: any } = {};

    for (const field of forms[section]) {
        initialValues[field.name] = field.value;

        if (!field.validations) continue;

        let schema = field?.typeValue === 'boolean' ? Yup.boolean() : Yup.string();

        for (const rule of field.validations) {

            const ruleValidation = rule as { type: string, message: string }

            if (ruleValidation.type === 'isTrue') {
                schema = (schema as Yup.BooleanSchema<boolean>).isTrue(ruleValidation.message)
            }

            if (ruleValidation.type === 'oneOf') {
                schema = (schema as Yup.StringSchema<string>).oneOf([Yup.ref((ruleValidation as any).ref), null], ruleValidation.message)
            }
            if (ruleValidation.type === "required") {
                schema = schema.required(ruleValidation.message);
            }

            if (ruleValidation.type === "minLength") {
                schema = (schema as Yup.StringSchema<string>).min(
                    (ruleValidation as any).value,
                    ruleValidation.message
                );
            }

            if (ruleValidation.type === "maxLength") {
                schema = (schema as Yup.StringSchema<string>).max(
                    (ruleValidation as any).value,
                    ruleValidation.message
                );
            }

            if (ruleValidation.type === "email") {
                schema = (schema as Yup.StringSchema<string>).email(ruleValidation.message);
            }
        }

        requiredFields[field.name] = schema;
    }

    return {
        validationSchema: Yup.object({ ...requiredFields }),
        initialValues,
        inputs: [...forms[section]],
    };
};
