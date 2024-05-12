import { useSelector } from "react-redux"
import Alert from 'react-bootstrap/Alert';

const HandleError = ()=>{
    const errorBack = useSelector(state =>state.ErrorReducer)
    return(
        <div>
            {
                errorBack.map((el,i,t)=>       
                    <Alert key='danger' variant='danger'>
                        {el.msg}
                    </Alert>)
            }
        </div>
    )
}
export default HandleError