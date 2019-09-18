# JSON Doc

## Vehicle & Driver

| Attribute     | Type   | Range / Format                                    | Description |
| ------------- | ------ | ------------------------------------------------- | ----------- |
| vehicle_brand | String | [奥迪, 大众, 长安, 商务, 考斯特]                  | 车辆品牌    |
| vehicle_color | String | [咖色, 黑色, 银灰, 白色, 红色, {{custom string}}] | 车辆颜色    |
| vehicle_id    | String |                                                   | 车牌号      |
| driver_name   | String |                                                   | 司机名字    |
| driver_gender | String | [male, female]                                    | 司机性别    |
| driver_tel    | String |                                                   | 司机电话    |

## visitor & contact

| Attribute             | Type   | Range / Format                                               | Description       |
| --------------------- | ------ | ------------------------------------------------------------ | ----------------- |
| visitor_unit          | String |                                                              | 来宾单位          |
| visitor_level         | String | [副厅级, 正部级, 副部级, 以下, {{custom string}}]            | 来宾最高级别      |
| visitor_count         | String |                                                              | 来宾随行数量      |
| visitor_arrival_date  | String | “yyyy-MM-dd”                                                 | 来宾到达日期      |
| visitor_arrival_time  | String | “HH:MM”                                                      | 来宾到达时间      |
| visitor_leave_date    | String | “yyyy-MM-dd”                                                 | 来宾离开日期      |
| visitor_leave_time    | String | “HH:MM”                                                      | 来宾到达时间      |
| visitor_arrive_flight | String |                                                              | 来宾到达航班/列车 |
| visitor_leave_flight  | String |                                                              | 来宾离开航班/列车 |
| visitor_hotel         | String | [融汇丽笙酒店, 科苑酒店, 丽苑酒店, 上泉坊酒店, 不住宿, {{custom string}}] | 来宾住宿酒店      |
| contactor_ID          | String |                                                              | 联络人工号        |
| contactor_gender      | String | [male, female]                                               | 联络人性别        |
| contactor_name        | String |                                                              | 联络人姓名        |
| contactor_tel         | String |                                                              | 联络人电话        |
| contactor_unit        | String |                                                              | 联络人单位        |

