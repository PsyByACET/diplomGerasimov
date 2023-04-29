
import {useState} from "react";
const  hostUrl="/upload";

const TestDow = () => {
    const [selectedFile,setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState();

    const handleChange = (event:any) => {
        console.log(event.target.files)
        setSelectedFile(event.target.files[0])
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("selected file");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const res = await fetch(hostUrl, {method: 'POST', body:formData});
        const data = await res.json();
        setUploaded(data);
    }

    return (
        <div>
            <input onChange={handleChange} type="file"/>
            <button onClick={handleUpload}>jmi</button>
        </div>
    );
}
export default TestDow