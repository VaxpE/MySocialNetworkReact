import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';
import { sendMessageActionCreator, updateNewMessageText } from '../../redux/state';


const Dialogs = (props) => {
  
    let dialogItems = props.dialog.dialogData.map( (el) => (<DialogItem name={el.name} id={el.id} />))

    let messageItems =  props.dialog.messageData.map( (el) => ( <MessageItem message={el.message}/>))

    let newMessage = React.createRef()
    const SendMessage = () =>{
        props.dispatch(sendMessageActionCreator());
    }

    let rewriteTextBox = () =>{
    let newText = newMessage.current.value;
    props.dispatch(updateNewMessageText(newText))
  }
  
    return (
        <div className={classes.content__dialogs}>
            <div className={classes.dialog__items}>
              {dialogItems}
            </div>
            <div className={classes.border}></div>
            <div className={classes.message_items}>
                {messageItems}
                <textarea onChange = {rewriteTextBox} value ={props.dialog.newMessageText} ref={newMessage} ></textarea>
                <button className ={classes.button} onClick={SendMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;