import * as Yup from "yup";

export  const activitySchema = Yup.object({
    activityName: Yup.string().nonNullable().required("select activity"),
    date: Yup.date().nonNullable().min(new Date().toISOString().split('T')[0]).max("2030-01-01").required("enter date"),
    duration: Yup.number().min(1).max(1440).required("enter duration in minutes"),
    description: Yup.string().trim("enter description").max(250).required("enter description"),
});

