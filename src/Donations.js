import React,{useState} from "react";
import { Accordion,Offcanvas,Button} from "react-bootstrap";

export default function Donations(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <div class="donationtypes">
        <div class="optdonation">
           <a href="https://www.organdonation.nhs.uk/register-your-decision/donate/"> <Button className="col-6"size="lg" variant="outline-primary"  style={{marginLeft:'50%'}} >
             Want Register for Organ Donation 
            </Button></a>

            {/* <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Donations</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <a><li></li></a>
                        <a><li></li></a>
                        <a><li></li></a>
                        <a><li></li></a>
                        <a><li></li></a>
                        <a><li></li></a>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas> */}
        </div>
        <Accordion >
            <Accordion.Item  eventKey="0">
                <Accordion.Header><strong> Eye Donation </strong></Accordion.Header>
                <Accordion.Body >
                In the case of eye donation. Call the central eye bank number or that of an eye bank near where you live 
                and they will come and take the corneas with the least amount of hassle for the family. 
                The whole process takes 5-10 minutes. If you do take the trouble to donate eyes, you’ll be proud to
                know that two people who suffer from corneal blindness will be now able to see, thanks to your generous donation.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><strong>Skin Donation – What It Means &amp; How It Happens </strong></Accordion.Header>
                <Accordion.Body>
                Indian Society has been aware of eye donation after death for several decades.
                But Skin Donation is a relatively newer concept.It is a donation that anyone 
                can make after their deaths, which can save the lives of thousands of people 
                and offer them a much better quality of life.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header><strong>Heart donation </strong></Accordion.Header>
                <Accordion.Body>
                Registering to become a heart donor could mean saving the life of someone with heart disease in the future. 
                Heart donation is a gift of life to those for whom standard treatments are no longer working.<br/><br/>
                Why not register as an organ donor today? The register is a permanent record of your wish to be a donor 
                and can be updated at any time.<br/><br/>

                Why do people need a heart donation?<br/>
                When the heart fails, it tends to be because of diseases that cause weakening of the heart muscle or blockages 
                of the blood vessels leading to the heart. Birth defects may also cause problems with the working of the heart.
                Cardiomyopathy and coronary heart disease are the two major reasons for heart transplantation. In both cases,
                if a life becomes seriously at risk, a heart transplant may be the only option.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header><strong>Tissue and bone donation </strong></Accordion.Header>
                <Accordion.Body>
                Donating tissue means we are able to repair and rebuild the bodies and lives of severely injured people. 
                You can also donate your corneas. Some tissue parts can only be donated after death. Others can be donated 
                from living donors, sometimes during routine surgery.<br/><br/>
                What tissues can I donate?<br/><br/>
                You can choose to donate tissue, such as skin, bone, tendons, eyes, heart valves and arteries after your death.
                Or, you can donate some tissue when you’re alive, for example bone that is removed during a hip replacement.
                Mothers who have had their babies safely delivered by elective caesarean section can donate amniotic membrane.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
                    
        </div>
        </>
    );

}