// personal information 
// -------------------------------------------------------
// staff id number
// nin
// surname                         \         big passport thumbnail here
// first name                       \
// middle name                      \
// date of birth(dd/mm/yyyy)        \
// place of birth                    \
// gender                             \
// marital status                         \
// state of origin                     \
// local government area                \
// contact information 
// -------------------------------------------------------
// email address
// phone number
// residential address

// Educaitonal information 
// -------------------------------------------------------
// primary school
// certificate obtained
// start year
// graduation year
// --------------------------------------------------------
// secondary school
// certificate obtained
// start year
// graduation year
// --------------------------------------------------------
// tertiary school
// certificate obtained
// start year
// graduation year

// employement information
// --------------------------------------------------------
// place of current deployment
// date of first appointment
// first appoitnment Rank and Grade Level
// current rank and grade level
// date of confirmation of appointment
// date of last promotion
// Zonal office
// state office
// --------------------------------------------------------






import image from '../../assets/aminu.jpg'
import { useState } from 'react'
const Enrollment = () => {
const [staffImage, setstaffImage] = useState(null)

const imageSelectHandler = (e) => {
  setstaffImage(URL.createObjectURL(e.target.files[0]))
}


  return (
    <div className='enrollment-page-container'>
      <div className="staff-enrolment-container container-padding">

        <form action="">

          <div className="personal-information">

            <h3>Personal Information</h3>

            <div className="staff-info-row-1">
              <div className="basic-info">
                <div>
                  <label htmlFor="surname">Surname:</label>
                  <input type="text" id="surname" name="surname" required />
                </div>

                <div>
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>

                <div>
                  <label htmlFor="middleName">Middle Name:</label>
                  <input type="text" id="middleName" name="middleName" />
                </div>

                <div>
                  <label htmlFor="dob">Date of Birth (dd/mm/yyyy):</label>
                  <input type="date" id="dob" name="dob" required />
                </div>
              </div>

              <div className="passport-photo">
                <label htmlFor="passport"> click to upload passport </label>
                <input type="file" id="passport" name="passport" accept="image/*" required  onChange={imageSelectHandler}/>
                <img src={staffImage} alt="" />

              </div>
            </div>


            <label htmlFor="staffId">Staff ID Number:</label>
            <input type="text" id="staffId" name="staffId" required />

            <label htmlFor="nin">NIN:</label>
            <input type="text" id="nin" name="nin" required />


            <label htmlFor="placeOfBirth">Place of Birth:</label>
            <input type="text" id="placeOfBirth" name="placeOfBirth" required />

            <label htmlFor="gender">Gender:</label>
            <input type="text" id="gender" name="gender" required />

            <label htmlFor="maritalStatus">Marital Status:</label>
            <input type="text" id="maritalStatus" name="maritalStatus" required />

            <label htmlFor="stateOfOrigin">State of Origin:</label>
            <input type="text" id="stateOfOrigin" name="stateOfOrigin" required />

            <label htmlFor="lga">Local Government Area:</label>
            <input type="text" id="lga" name="lga" required />

            <label htmlFor="contactInfo">Contact Information:</label>
            <input type="text" id="contactInfo" name="contactInfo" required />
          </div>

        </form>

      </div>

    </div>
  )
}

export default Enrollment