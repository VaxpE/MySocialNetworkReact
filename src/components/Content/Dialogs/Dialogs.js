import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.content__dialogs}>
            <div className={classes.dialog__items}>            
                    <div className={classes.dialog_box}>
                        <div className={classes.dialog}>
                            Vlad
                        </div>
                    </div>
                <div className={classes.dialog_box}>
                    <div className={classes.dialog}>
                        Kostya
                    </div>
                </div>
                <div className={classes.dialog_box}>
                    <div className={classes.dialog}>
                        Eva
                    </div>
                </div>
                <div className={classes.dialog_box}>
                    <div className={classes.dialog}>
                        Nastya
                    </div>
                </div>
                <div className={classes.dialog_box}>
                    <div className={classes.dialog}>
                        Anya
                    </div>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.message_items}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>I'm fine</div>
            </div>
        </div>
    )
}
export default Dialogs;