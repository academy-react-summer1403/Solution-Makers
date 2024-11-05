import React from 'react'
import Header from '../../components/common/Header'
import AppLayout from "../../layouts/AppLayout";
import CourseCompSec from '../../components/CourseCompSec';


const CourseComparison = () => {
    return (
        <>
            <AppLayout>
                <Header
                    img="/src/assets/images/courses/Asset11.png"
                    heading="با مقایسه کردن دوره های آموزشی با هم دیگه میتونی دوره مناسب خودتو پیدا کنی!"
                    reminding="مقایسه دو دوره باهم !"
                />
                <CourseCompSec />
            </AppLayout>
        </>
    )
}

export default CourseComparison