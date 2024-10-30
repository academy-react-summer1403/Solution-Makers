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
                    heading="آموزش برنامه نویسی با بهترین ها"
                    reminding="مهمه از کی یاد می گیری!!"
                />
                <CourseCompSec />
            </AppLayout>
        </>
    )
}

export default CourseComparison