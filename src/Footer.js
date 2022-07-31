import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
} from 'mdb-react-ui-kit';
import './About.css'
export default function Footer() {

  return (
    <MDBFooter className='text-center text-white' style={{ backgroundImage:' linear-gradient( rgba(31,43,86,1) 8.3%, rgba(0,117,201,1) 96.6% )' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                
                <a href='https://mediniz.com/list/hospitals/india' style={{textDecoration:'none'}}>
                <img class="imagine" src='https://media.istockphoto.com/photos/modern-hospital-building-picture-id1312706413?b=1&k=20&m=1312706413&s=170667a&w=0&h=VRi3w2E1UqvCCcK-nDV6mH7FhDZoTU9MM2QKSom96X4=' className='w-100' />
                <h6 style={{color:"black"}}>Find Hospitals</h6>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'>
                
                <a href='https://mediniz.com/list/ambulance-services/india' style={{textDecoration:'none'}}>
                <img class="imagine" src='https://image.winudf.com/v2/image1/Y29tLmdhbWF4aWRjLm11bHRpbGV2ZWxmbHlpbmdhbWJ1bGFuY2VoZF9zY3JlZW5fMF8xNTQxMjQ0OTIwXzA5MA/screen-0.jpg?fakeurl=1&type=.webp' className='w-100 ' />
                <h6 style={{color:"black"}}>Ambulance Services Hospitals</h6>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='https://mediniz.com/list/blood-banks/india' style={{textDecoration:'none'}}>
                <img class="imagine" src='https://cdn.pixabay.com/photo/2020/07/21/19/41/blood-5427229__340.jpg' className='w-100 ' />
                <h6 style={{color:"black"}}>Blood Banks</h6>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='https://mediniz.com/list/health-ngo-foundation/india' style={{textDecoration:'none'}}>
                <img  class="imagine"src='https://www.giveindia.org/blog/wp-content/uploads/2021/12/10-NGOs-which-have-revolutionised-Healthcare-in-India-Banner.jpg' className='w-100'  />
                <h6 style={{color:"black"}}>Health Groups And NGOs In India</h6>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='https://mediniz.com/list/diagnostic-centers/india' style={{textDecoration:'none'}}>
                <img class="imagine" src='https://documents.labsystemsdx.com/category/large/148051424743-Infectious-Disease-Tests.jpg' className='w-100'  />
                <h6 style={{color:"black"}}>Diagnostic Centers</h6>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='https://mediniz.com/list/cancer/hospitals/india' style={{textDecoration:'none'}}>
                <img class="imagine" src='https://www.mskcc.org/sites/default/files/styles/large/public/node/19243/3x2/biopsy_surgery_1200x800.jpg' className='w-100'  />
                <h6 style={{color:"black"}}>Cancer Help Centers</h6>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
     
        © 2022 Copyright:&nbsp;
        <a className='text-white' href='https://mdbootstrap.com/'>
          OnConnect
        </a>
      </div>
    </MDBFooter>
  );
}