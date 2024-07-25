import CreateRoomForm from './CreateRoomForms';
import './index.css'
import JoinRoomForm from './JoinRoomForms';

const Forms = ({ uuid, socket, setUser }) =>{
    return (
        <div className="row h-100 pt-5">
            <div className=" form-box p-5 col-md-4 mt-5 border border-primary rounded-2 d-flex flex-column align-items-center mx-auto">
                <h1 className='text-primary fw-bold '>Create Room</h1>
                <CreateRoomForm 
                uuid={uuid} 
                socket={socket} 
                setUser={setUser} />
            </div>
            <div className=" form-box p-5 col-md-4 mt-5 border border-primary rounded-2 d-flex flex-column align-items-center mx-auto">
                <h1 className='text-primary fw-bold '>Join Room</h1>
                <JoinRoomForm
                    socket={socket}
                    uuid={uuid} 
                    setUser={setUser} />
            </div>
        </div>
    )
}

export default Forms;