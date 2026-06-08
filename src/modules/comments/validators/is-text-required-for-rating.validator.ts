import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsTextRequiredForRating(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'isTextRequiredForRating',
            target: (object as any).constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const obj = args.object as any;
                    const rating = obj.rating;

                    if (rating >= 2 && rating <= 4) {
                        return typeof value === 'string' && value.length >= 10;
                    }

                    return true;
                },
                defaultMessage(args: ValidationArguments) {
                    const obj = args.object as any;
                    return `text is required and must be at least 10 characters when rating is ${obj.rating}`;
                },
            },
        });
    };
}

