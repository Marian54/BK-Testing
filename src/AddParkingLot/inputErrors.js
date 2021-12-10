export default function inputErrors(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = '*Name required';
    }

    if (!values.address.trim()) {
        errors.address = '*Address required';
    }

    if (!values.floors.trim()) {
        errors.floors = '*Floors required';
    }

    if (!values.capacity.trim()) {
        errors.capacity = '*Capacity required';
    }
    return errors;
}