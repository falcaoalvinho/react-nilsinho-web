import styled from "styled-components";
import { Colors } from "../../../colors/colors";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    gap: 10px;

    width: 65%;

    border-style: solid;
    border-width: 3px;
    border-radius: 20px;
    border-color: ${Colors.color4E4E4E};
`;

//Perguntar por que essa bomba xia para algum professor!!!!!!!
// export function Detail(props){
//     let DetailParts = []
//     for(let x = 0; x < props.detailLength; x++){
//         DetailParts.push(
//             <div style={{
//                 height: 35,
//                 width: 8,
//                 alignSelf: 'center',
//                 backgroundColor: props.detailColor[x]
//             }}/> )
//     }
//     return (
//         <div style={{display: 'flex',flexDirection: 'row'}}>
//             {DetailParts}
//         </div>)}

export function Detail(props){
    return(
        <div style={{display: 'flex',flexDirection: 'row'}}>
            <div style={{height: 35, width: 8, alignSelf: 'center', backgroundColor: props.detailColor[0]}}/>
            <div style={{height: 35, width: 8, alignSelf: 'center', backgroundColor: props.detailColor[1]}}/>
        </div>
    )
}  

export const Text = styled.h4`
    font-family: 'Montserrat';
    color: ${Colors.colorffffff};
    font-weight: 'bold';
    font-size: 40px;
    align-self: flex-start;
`;

export function RemoveButton(props) {
    return (
        <button style={{backgroundColor:'rgba(0,0,0,0)', borderStyle: 'none'}} onClick={props.onClick}>
            <img src={props.ButtonImage} style={{height: 35, width: 35}}/>
        </button>
    )
}
