import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="about-container">
//       <div className="about-image">
//         <img src={Shell} alt="Shell" />
//       </div>
//       <div className="about-text">
//         <h1>About Me</h1>
//         <p>
//           Welcome to my About Me page! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum
//           libero eget orci gravida, et aliquam ipsum pharetra. Nulla facilisi. Morbi eu dui fermentum, fermentum
//           risus et, fringilla enim. Sed maximus augue et tempor. Sed tempor fermentum orci, sit amet pulvinar
//           metus facilisis ac. Sed at lectus augue.
//         </p>
//         <p>
//           Sed lacinia augue vitae commodo tempor. Morbi congue malesuada sem at ullamcorper. Fusce consequat
//           nulla eu massa maximus efficitur. Vivamus a mauris odio. Vivamus vehicula urna at magna suscipit,
//           a lacinia justo placerat. Nam faucibus odio a vehicula consequat. Quisque vel dolor vitae tellus
//           efficitur convallis. Cras vel dapibus urna.
//         </p>
//       </div>
//     </div>
//   );
// }




export default function AboutUs() {
    return (
      <section id="about-section">
  <div className="about-container-center">
    <div className="row">
      <div className="col-lg-6 align-items-center justify-content-center ">
        <div className="blockabout">
          <div className="blockabout-inner text-center text-sm-start">
            <div className="title-bold pb-2 mb-3">
              <h3>ABOUT ME</h3>
            </div>
            <p className="description-p text-muted pe-0 pe-lg-0">
              My name is Bridget Chirimbani, a third-year Computing student at the African Leadership College. My mission is to Serve.I have a passion for efficiency and simplicity, ie using technology for the betterment of our lives.Technology should be for the people, by the people.
            </p>
            <p>My motto is "Less Is More". People are not looking for complicated systems in this already complicated life!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
  }


  