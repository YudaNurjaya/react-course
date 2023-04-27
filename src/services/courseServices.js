import restApi from "../config/resApi";

export const getCourses = (params) =>{
    return restApi.get("/courses")
}

export const addCourse = (payload) => {
    return restApi.post("/courses",payload)
}

export const editCourse = (payload, id) => {
    return restApi.put(`/courses/${id}`, payload)
}

export const getById = (id) => {
    return restApi.get(`/courses/${id}`)
}

export const deleteById = (id) => {
    return restApi.delete(`/courses/${id}`)
}