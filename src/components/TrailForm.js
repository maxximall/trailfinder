import React from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';


export default class TrailForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.trail ? props.trail.name : '',
            location: props.trail ? props.trail.location : '',
            duration: props.trail ? props.trail.duration : '',
            difficulty: props.trail ? props.trail.difficulty : '',
            image: props.trail ? props.trail.image : '',
            description: props.trail ? props.trail.description : '',
            imageURL: props.trail ? props.trail.imageURL : '',
            actualLength: props.trail ? props.trail.actualLength : '',
            error: '',
            isUploading: false,
            progress: 0,
            

        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this);
        this.onDurationChange = this.onDurationChange.bind(this);
        this.onDifficultyChange = this.onDifficultyChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleUploadStart = this.handleUploadStart.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.handleUploadError = this.handleUploadError.bind(this);
        this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
        this.onActualLengthChange = this.onActualLengthChange.bind(this);
    };
    onFormSubmit(e){
        e.preventDefault();
        if(!this.state.name){
            this.setState(()=>({error: 'Please enter the name'}))
        }else{
            this.setState(()=>({error: ''}));
            //passes up everything that got returned here
            this.props.onSubmit({
                name: this.state.name,
                location: this.state.location,
                duration: this.state.duration,
                difficulty: this.state.difficulty,
                image: this.state.image,
                description: this.state.description,
                imageURL: this.state.imageURL,
                actualLength: this.state.actualLength
            })
        }        
    };
    onNameChange(e){
        const name = e.target.value;
        this.setState(()=>({name}));

    };
    onLocationChange(e){
        const location = e.target.value;
        this.setState(()=>({location}));
    }
    onDurationChange(e){
        const duration = e.target.value;
        this.setState(()=>({duration}));
    }
    onDifficultyChange(e){
        const difficulty = e.target.value;
        this.setState(()=>({difficulty}));
    }
    onImageChange(e){
        const image = e.target.value;
        this.setState(()=>({image}));
    }
    onDescriptionChange(e){
        const description = e.target.value;
        this.setState(()=>({description}))
    }
    onActualLengthChange(e){
        const actualLength = e.target.value;
        this.setState(()=>({actualLength}))
    }
    
    handleUploadStart = () => this.setState({isUploading: true, progress: 0});

    handleProgress = (progress) => this.setState({progress});

    handleUploadError = (error) => {
        this.setState({isUploading: false});
        console.error(error);
    }

    handleUploadSuccess = (filename) => {
        this.setState({image: filename, progress: 100, isUploading: false});
        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({imageURL: url}));
    };

    render() {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onFormSubmit} >
                    <input type='text' placeholder='Name'  value={this.state.name} onChange={this.onNameChange} />
                    <select value={this.state.location} onChange={this.onLocationChange}>
                        <option value="">Any Region</option>    
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <select value={this.state.duration} onChange={this.onDurationChange}> 
                        <option value="">Any Length</option>
                        <option value="dayhike">day hike</option>  
                        <option value="short">short (1 - 3 days)</option>
                        <option value="medium">medium (4 - 14 days)</option>
                        <option value="long">long ( > 14 days)</option>
                    </select>

                    <input type='text' placeholder='actual length' value={this.state.actualLength} onChange={this.onActualLengthChange} />

                    <select value={this.state.difficulty} onChange={this.onDifficultyChange}>
                        <option value="">Any</option> 
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                    <textarea type='text' rows="8" cols="100" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
                                    
                    {this.state.isUploading &&
                        <p>Progress: {this.state.progress}</p>
                    }
                    {this.state.imageURL &&
                        <img src={this.state.imageURL} />
                    }
                    <FileUploader
                        accept="image/*"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />

                    <button>Save</button>
                </form>
            </div>
        )
    }
}
