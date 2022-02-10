import React,{useState,useEffect,lazy,Suspense} from "react";
import axios from "axios";
import './App.css';
import AlbumDropDown from'../AlbumDropDown/AlbumDropDown';
import SearchBar from'../SearchBar/SearchBar';
import AlbumModal from '../AlbumModal/AlbumModal';
const AlbumTiles = lazy(() => import('../AlbumTiles/AlbumTiles'));

const App = ()=>{
    const [albumPhotos,setAlbumPhotos] = useState([]);//state variable that will change accourding to user filters
    const [allAlbumPhotos,setAllAlbumPhotos] = useState([]);//state variable that will be used as a source for the filters
    const [openModal,setOpenModal] = useState(false);//a flag for the modal to open
    const [currentPhoto,setCurrentPhoto] = useState({});//the information of the selected photo, will be shown in the modal

    //send api call when the component mounts and inserts the data from the api to the stata
    useEffect(() => {
        let isApiSubscribed = true;
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
            if (isApiSubscribed) {
                setAlbumPhotos(res.data);
                setAllAlbumPhotos(res.data);
            }
        });
        return () => {//cleanup function
            isApiSubscribed = false;
        };
    }, []);
    const toggleModal = ()=>{
        setOpenModal(!openModal);
    }
    return(
        <div>
            {openModal&&<AlbumModal onClick={toggleModal} photoData={currentPhoto}/>}
            <h1 id="title">Photo Albums Page</h1>
            <div className="filtrsContainer">
                <SearchBar photosData={allAlbumPhotos} setAlbumPhotos={setAlbumPhotos}/>
                <AlbumDropDown photosData={allAlbumPhotos} setAlbumPhotos={setAlbumPhotos}/>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <AlbumTiles photosData={albumPhotos} toggleModal={toggleModal} setCurrentPhoto={setCurrentPhoto}/>
            </Suspense>
        </div>)
}

export default App;