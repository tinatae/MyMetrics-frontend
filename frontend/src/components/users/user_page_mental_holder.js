import React from "react";
import UserPageMentalLineGraph from './user_page_mental_line_graph';
import UserPageMentalPieGraph from './user_page_mental_pie_graph';
import UserPageMentalBarGraph from './user_page_mental_bar_graph';

const UserPageMentalHolder = ({
    metrics,
}) => {

    return (
        <div>  
            <UserPageMentalBarGraph metrics={metrics} />  
            <UserPageMentalPieGraph metrics={metrics} /> 
            <UserPageMentalLineGraph metrics={metrics} />         
        </div>
    );
};

export default UserPageMentalHolder;

