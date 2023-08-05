import { Form,Col,Row,Select, Button, Input ,Space ,Radio} from "antd";
import { useEffect, useState } from "react"
import { db ,get, orderByChild, ref} from "../../firebase"
import './SearchForm.css'
import { useDispatch } from "react-redux";
import { setOptions } from "../../actions/filter";
import { setPrice } from "../../actions/price";
import { SearchName } from "../../actions/search";
import {SearchOutlined} from '@ant-design/icons'
function SearchForm(){
    const {Search} = Input
    //Lấy ra nhãn các category
    const dispatch = useDispatch();
    const [categories, setCategories] = useState()
    useEffect(()=>{
        const fetchCategory = async() => {
        const productRef = ref(db, 'products');
        const productQuery = orderByChild('category');
        const snapshot = await get(productRef, productQuery);
        if (snapshot.exists()) {
            const data = Object.values(snapshot.val())
            const result = data.map((data) => data.category);
            setCategories(result)
            }
        }
    fetchCategory();
    },[])
//Gán nhãn cho từng key để đưa vào select của antd
    let options = []
    if(categories){
    options = categories.reduce((acc, category) => {
            if (!acc.find((option) => option.value === category)) {
            acc.push({ key: category, value: category });
            }
            return acc;
        },[{key:'all',value:'all'}]);
    }

    const handleFinish = (cagetory) =>{
        dispatch(setOptions(cagetory))
    }

    const handleChange = (e) => {
        dispatch(setPrice(e.target.value))
    }
    const handleSearch = (e) => {
        dispatch(SearchName(e.target.value))
    }

    return(
        <>
        
        <div className="SearchForm">
        <Row gutter = {[12,12]}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Input className="Input" placeholder="Nhập tên" prefix={<SearchOutlined></SearchOutlined>} onChange={handleSearch}></Input>
            </Col>
            <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                <Form onFinish={handleFinish}>
                        <Form.Item name = "category" >
                            <Select options={options} placeholder='Chọn loại sản phẩm' className="Search-Form__Select"></Select>
                        </Form.Item>
                        <Form.Item className="button">
                            <Button type='primary' htmlType="submit">
                                Lọc
                            </Button>
                        </Form.Item>
                </Form>
            </Col>
        
            <Col xl={24} lg={24} md={24} sm={8} xs={24}>   
                <Radio.Group onChange={handleChange} defaultValue='Default'>
                <Space direction="vertical" >
                    <Radio value='Default' defaultChecked>Mặc định</Radio>
                    <Radio value='Low-High'>Thấp đến cao</Radio>
                    <Radio value='High-Low'>Cao xuống thấp</Radio>
                </Space>
                </Radio.Group>
            </Col>
        </Row>
        </div>
        </>
    )
}

export default SearchForm;