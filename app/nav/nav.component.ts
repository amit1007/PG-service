import { Component, OnInit } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {ModalModule} from "ngx-modal";
import { ModalService } from '../nav/service/model.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	private bodyText: string;

  public showWebcam = true;
  	public allowCameraSwitch = true;
  	public multipleWebcamsAvailable = false;
	public deviceId: string;
	  public videoOptions: MediaTrackConstraints = {
		// width: {ideal: 1024},
		// height: {ideal: 576}
	  };
	  public errors: WebcamInitError[] = [];
	
	  // latest snapshot
	  public webcamImage: WebcamImage = null;
	
	  // webcam snapshot trigger
	  private trigger: Subject<void> = new Subject<void>();
	  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
	  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
	
	
	  public triggerSnapshot(): void {
		this.trigger.next();
	  }
	
	  public toggleWebcam(): void {
		this.showWebcam = !this.showWebcam;
	  }
	
	  public handleInitError(error: WebcamInitError): void {
		this.errors.push(error);
	  }
	
	  public showNextWebcam(directionOrDeviceId: boolean|string): void {
		// true => move forward through devices
		// false => move backwards through devices
		// string => move to device with given deviceId
		this.nextWebcam.next(directionOrDeviceId);
	  }
	
	  public handleImage(webcamImage: WebcamImage): void {
		console.info('received webcam image', webcamImage);
		this.webcamImage = webcamImage;
	  }
	
	  public cameraWasSwitched(deviceId: string): void {
		console.log('active device: ' + deviceId);
		this.deviceId = deviceId;
	  }
	
	  public get triggerObservable(): Observable<void> {
		return this.trigger.asObservable();
	  }
	
	  public get nextWebcamObservable(): Observable<boolean|string> {
		return this.nextWebcam.asObservable();
	  }

		constructor(private modalService: ModalService) {
    }

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs()
		  .then((mediaDevices: MediaDeviceInfo[]) => {
			this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
			});
			openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }
  }
  
}
