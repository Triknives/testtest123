import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonGrid, IonRow} from '@ionic/react';
import Calendar from 'react-calendar';
import './AvailabilityCalendar.css';
import { tabletPortraitOutline } from 'ionicons/icons';


class TimeSlot extends Component {




  render() {
    return (
      <div>
        <IonIcon icon={tabletPortraitOutline} />
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
      </div>

    );
  };
  }




export default TimeSlot;
