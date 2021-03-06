/**
 * This is the resources page where hackers come to look for basic info
 * such as: Tracks, How to submit the project, some API available, etc.
 *
 * We separate the components into four main comp:
 * 1. Hardware & API
 * 2. Prizes
 * 3. Submissions
 * 4. Tracks
 *
 * Since they all have the same format - we can take advantage of React to create a reusable card
 * If you would like to makes any changes, please go to this file
 * - ResourcesCard -> sachacks/src/components/ResourcesPage/ResourcesCard.js
 */

import React from "react";
import "./resources.css";

// Import components for this page here
import Navbar from "../../shared/Navigation/Navbar";
import Copyright from "../../shared/Copyright/Copyright";
import ResourcesCard from "../../components/ResourcesPage/ResourcesCard";
import MobileNavBar from "../../shared/MobileNavBar/MobileNavBar";

const Resources = () => {
    const content1 = {
        topic: "Starter Packs",
        list: [
            <span>
                <b>Tools: </b>
                <a href="https://try.github.io" target="_blank"> Git</a>, <a
                    href="https://training.github.com/downloads/github-git-cheat-sheet.pdf"
                    target="_blank"
                >
                    Github Git Cheatsheet
                </a>, <a href="https://firstaidgit.io/#/" target="_blank">
                    First Aid Git
                </a>, <a href="https://ngrok.com/" target="_blank">
                    Ngrok
                </a>, <a href="https://repl.it/" target="_blank">
                    Replit
                </a>, <a href="https://codepen.io/" target="_blank">
                    CodePen
                </a>
            </span>,
            <span>
                <b>Frontend: </b>
                <a href="https://reactjs.org/" target="_blank">
                    React
                </a>, <a
                    href="https://github.com/react-boilerplate/react-boilerplate"
                    target="_blank"
                >
                    React Boilerplate
                </a>, <a
                    href="https://github.com/ReactTraining/react-router"
                    target="_blank"
                >
                    React Router
                </a>, <a href="https://redux.js.org/" target="_blank">
                    Redux
                </a>, <a
                    href="https://github.com/h5bp/html5-boilerplate"
                    target="_blank"
                >
                    HTML5 Boilerplate
                </a>, <a
                    href="https://github.com/electron-react-boilerplate/electron-react-boilerplate"
                    target="_blank"
                >
                    Electron React Boilerplate
                </a>, <a href="https://getbootstrap.com/" target="_blank">
                    Bootstrap
                </a>, <a href="https://startbootstrap.com/" target="_blank">
                    Bootstrap Themes, Templates, Tools
                </a>
            </span>, 
            <span>
                <b>Backend: </b>
                <a
                    href="https://github.com/MLH/mlh-hackathon-flask-starter"
                    target="_blank"
                >
                    MLH Flask Starter
                </a>, <a
                    href="https://github.com/MLH/mlh-hackathon-nodejs-starter"
                    target="_blank"
                >
                    MLH Node.js Starter
                </a>, <a href="https://www.djangoproject.com/" target="_blank">
                    Django
                </a>, <a href="https://expressjs.com/" target="_blank">
                    Express.js
                </a>, <a
                    href="https://flask.palletsprojects.com/en/1.1.x/"
                    target="_blank"
                >
                    Flask
                </a>, <a
                    href="https://guides.rubyonrails.org/getting_started.html"
                    target="_blank"
                >
                    Rails
                </a>, <a href="https://www.mongodb.com/" target="_blank">
                    MongoDB
                </a>, <a
                    href="https://www.khanacademy.org/computing/computer-programming/sql"
                    target="_blank"
                >
                    Khan Academy Intro to SQL
                </a>
            </span>,
            <span>
                <b>APIs: </b>
                <a href="https://www.postman.com/" target="_blank">
                    Postman
                </a>, <a href="https://insomnia.rest/" target="_blank">
                    Insomnia REST
                </a>, <a href="https://any-api.com/" target="_blank">
                    Any API (Documentation and Test Consoles for Over 1400
                    Public APIs)
                </a>, <a href="https://apilist.fun/" target="_blank">
                    API List (Public List of free APIs)
                </a>, <a
                    href="https://github.com/public-apis/public-apis"
                    target="_blank"
                >
                    Public APIs
                </a>, <a href="https://fastapi.tiangolo.com/" target="_blank">
                    FastAPI
                </a>
            </span>,
            <span>
                <b>Cloud Services: </b>
                <a href="https://www.ibm.com/cloud" target="_blank">
                    IBM Cloud
                </a>, <a href="https://azure.microsoft.com/en-ca/" target="_blank">
                    Microsoft Azure
                </a>, <a href="https://cloud.google.com/" target="_blank">
                    Google Cloud
                </a>
            </span>,
            <span>
                <b>App & Mobile Development: </b>
                <a
                    href="https://flutter.dev/docs/get-started/install"
                    target="_blank"
                >
                    Flutter
                </a>, <a
                    href="https://reactnative.dev/docs/getting-started"
                    target="_blank"
                >
                    React Native
                </a>, <a href="https://ionicframework.com/" target="_blank">
                    Ionic
                </a>, <a
                    href="https://developer.apple.com/swift/resources/"
                    target="_blank"
                >
                    Swift
                </a>, <a href="https://developer.android.com/" target="_blank">
                    Android
                </a>, <a href="https://developer.android.com/studio" target="_blank">
                    Android Studio
                </a>, <a href="https://firebase.google.com/docs" target="_blank">
                    Firebase
                </a>
            </span>,
            <span>
                <b>Data Science: </b>
                <a
                    href="https://colab.research.google.com/github/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/Index.ipynb"
                    target="_blank"
                >
                    Python Data Science Handbook
                </a>, <a href="https://course.fast.ai/" target="_blank">
                    Practical Deep Learning for Coders
                </a>, <a href="https://www.python.org/downloads/" target="_blank">
                    Python
                </a>, <a href="https://jupyter.org/" target="_blank">
                    Jupyter
                </a>, <a href="https://www.r-project.org/" target="_blank">
                    R
                </a>, <a href="https://www.scipy.org/" target="_blank">
                    SciPy
                </a>, <a href="https://pandas.pydata.org/" target="_blank">
                    Pandas
                </a>, <a href="https://www.tensorflow.org/" target="_blank">
                    TensorFlow
                </a>, <a href="https://scikit-learn.org/stable/" target="_blank">
                    SciKit Learn
                </a>, <a href="https://keras.io/" target="_blank">
                    Keras
                </a>, <a href="https://pytorch.org/" target="_blank">PyTorch</a>, <a href="https://colab.research.google.com/" target="_blank">
                    Google Colab
                </a>
            </span>,
            <span>
                <b>Data Sets: </b>
                <a href="https://www.kaggle.com/datasets" target="_blank">
                    Kaggle Datasets
                </a>, <a
                    href="https://github.com/awesomedata/awesome-public-datasets"
                    target="_blank"
                >
                    Awesome Public Datasets
                </a>, <a href="https://www.data.gov/" target="_blank">
                    U.S. Government's Open Data
                </a>, <a
                    href="https://datasetsearch.research.google.com/"
                    target="_blank"
                >
                    Google Dataset Search
                </a>
            </span>,
            <span>
                <b>Game Development: </b>
                <span>
                    Check out this awesome list of resources such as Engines,
                    Tools, and Add-ons from{" "}
                </span> <a href="https://itch.io/jam/sdc-retro-jam" target="_blank" style={{textDecoration: 'underline'}}>
                    SDC's Retro Jam
                </a>. Also check out{" "}
                <a
                    href="https://www.youtube.com/channel/UCZnRLfV_gFG5hvO88T_v5Ug"
                    target="_blank"
                    style={{textDecoration: 'underline'}}
                >
                    Sacramento Developer Collective's YouTube Page
                </a>{" "}
                for more information!
                
            </span>,
            <span>
                <b>Hardware: </b>
                <a href="https://create.arduino.cc/editor" target="_blank">Arduino Web Editor</a>
                <a href="https://www.digikey.com/schemeit/project/" target="_blank">Digikey Scheme-it</a>
                <a href="https://learn.adafruit.com/" target="_blank">Adafruit Learn</a>
            </span>,
            <span>
                <b>Design: </b>
                <a
                    href="https://www.invisionapp.com/inside-design/design-resources/"
                    target="_blank"
                >
                    Invision Design UI Kits
                </a>, <a href="http://sketchappsources.com/" target="_blank">
                    Sketchapp Source UI Kits
                </a>, <a href="https://www.figma.com/community/" target="_blank">
                    Figma Community
                </a>, <a
                    href="https://www.uxlibrary.org/more/free-resources/ui-kits"
                    target="_blank"
                >
                    See More UI Kits
                </a>
            </span>,
            <span>
                <b>Free Illustrations: </b>
                <a href="https://www.drawkit.io/" target="_blank">
                    Drawkit
                </a>, <a href="http://undraw.co/" target="_blank">
                    Undraw
                </a>, <a href="https://blush.design/" target="_blank">
                    Blush
                </a>, <a
                    href="https://www.uxlibrary.org/more/free-resources/illustrations"
                    target="_blank"
                >
                    See More Illustrations here
                </a>, <a
                    href="https://www.uxlibrary.org/more/free-resources"
                    target="_blank"
                >
                    For more design resources check out UX Library here
                </a>
            </span>,
            <span>
                <b>Free Typography Inspirations: </b>
                <a href="https://fontpair.co/" target="_blank">
                    FontPair
                </a>, <a
                    href="https://fonts.google.com/?preview.text=&preview.text_type=custom"
                    target="_blank"
                >
                    Google Fontss
                </a>
            </span>,
            <span>
                <b>Free Color Palette Inspirations: </b>
                <a
                    href="https://color.adobe.com/create/color-accessibility"
                    target="_blank"
                >
                    Color Blind (Adobe)
                </a>, <a href="https://coolors.co/" target="_blank">
                    Colors Generator
                </a>, <a href="https://colorhunt.co/" target="_blank">
                    Color Hunt
                </a>
            </span>,
        ],
    };
    const content2 = {
        topic: "Prizes",
        list: [
            "1st IBM Z",
            "2nd IBM Z",
            "3rd IBM Z",
            "1st Data Science",
            "1st Game Development",
            "2nd Game Development",
            "3rd Game Development",
            "1st Best Sacramento Hack",
            "2nd Best Sacramento Hack",
            "3rd Best Sacramento Hack",
            "Best Community College Hack",
            "Best Interdisciplinary Hack",
            "1st Design Track",
            "2nd Design Track",
            "Best Design (No Coding Necessary)",
            "Best UI/UX With Sketch",
            "Best Hardware Hack Sponsored by Digi-Key",
            "Best Domain Registered with Domain.com",
        ],
    };
    const content3 = {
        topic: "Submissions",
        list: [
            "Maximum of four (4) people per team.",
            "Your project must be completed during the hacking period. You cannot work on your project before hacking begins at 7:00PM Pacific Time on Friday, February 19, 2021, or else you will be disqualified and not eligible for prizes.",
            "You must submit your project before 11:00 AM Pacific Time on Sunday, February 21, 2021.",
            "The decisions that judges make are final, and there will be no appeal process.",
            "You cannot steal another team's code in any way, shape, or form. We will check for cheating.",
            "More information about the Devpost submission process will be added soon!",
        ],
    };
    const content4 = {
        topic: "Tracks",
        list: [
            "Best Design",
            "Best Design (No Code)",
            "Best UI/UX With Sketch",
            "IBM Z",
            "Game Development",
            "Data Science",
            "Best Solo AR/VR Hack Using EchoAR",
            "Best Use of Google Cloud",
            "Best Hardware Hack Sponsored by Digi-Key",
            "Best Sacramento Hack",
            "Best Community College Hack",
            "Best Startup Idea",
            "Best Interdisciplinary Hack",
            "Best Domain Registered with Domain.com",
        ],
    };

    return (
        <React.Fragment>
            <div className="resources-page">
                <div className="shadow-cover">
                    <Navbar />
                    <MobileNavBar />
                    <div className="resources-main">
                        <h1 className="resources-header">Resources</h1>
                        <div className="resources-content">
                            <div className="horz-content">
                                <ResourcesCard content={content1} />
                                <ResourcesCard content={content2} />
                            </div>
                            <div className="horz-content">
                                <ResourcesCard content={content3} />
                                <ResourcesCard content={content4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </React.Fragment>
    );
};

export default Resources;
