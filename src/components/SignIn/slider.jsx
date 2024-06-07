// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Typography, Button } from '@mui/material';

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     {
//       image: 'Banner01.png',
//       title: 'Cursos',
//       subtitle: 'Uma Plataforma de cursos completa',
//       text: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum',
//     },
//     {
//       image: 'Banner01.png',
//       title: 'Cursos Online',
//       subtitle: 'Aprenda em qualquer lugar',
//       text: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum',
//     },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((currentIndex + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
//   };

//   const SliderContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//     position: relative;
//   `;
  
//   const SliderImage = styled.img`
//     width: 130vh;
//     height: 110vh;
//     object-fit: cover;
//     margin-bottom: 20px;
//   `;
  
//   const SliderContent = styled.div`
//     text-align: center;
//     padding: 20px;
//     color: white;
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
//     position: absolute;
//     bottom: 10%;
//     left: 0;
//     right: 0;
//     margin: 0 auto;
//     width: 80%;
//   `;
  
//   const SliderText = styled(Typography)`
//     margin-bottom: 10px;
//     text-align: justify;
//   `;
  
//   const SliderControls = styled.div`
//     position: absolute;
//     bottom: 20px;
//     right: 20px;
//     display: flex;
//     flex-direction: row;
//   `;
  
//   const SliderControlButton = styled(Button)`
//     margin: 10px;
//   `;
  
//   return (
//     <SliderContainer>
//       <SliderImage src={slides[currentIndex].image} alt={slides[currentIndex].title} />
//       <SliderContent>
//         <SliderText variant="h2">{slides[currentIndex].title}</SliderText>
//         <SliderText variant="h6">{slides[currentIndex].subtitle}</SliderText>
//         <SliderText variant="body1">{slides[currentIndex].text}</SliderText>
//       </SliderContent>
//       <SliderControls>
//         <SliderControlButton variant="contained" color="primary" onClick={handlePrev}>Anterior</SliderControlButton>
//         <SliderControlButton variant="contained" color="primary" onClick={handleNext}>Próximo</SliderControlButton>
//       </SliderControls>
//     </SliderContainer>
//   );
// };

// export default Slider;







import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'Banner01.png',
      title: 'Cursos',
      subtitle: 'Uma Plataforma de cursos completa',
      text: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum',
    },
    {
      image: 'Banner01.png',
      title: 'Cursos',
      subtitle: 'Aprenda em qualquer lugar',
      text: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum',
    },
    {
      image: 'Banner01.png',
      title: 'Cursos',
      subtitle: 'Cursos com 10% OFF',
      text: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };




  const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
  `;
  
  const SliderImage = styled.img`
    width: 130vh;
    height: 110vh;
    object-fit: cover;
    margin-bottom: 20px;
  `;
  
  const SliderContent = styled.div`
    text-align: center;
    padding: 20px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80%;
  `;
  
  const SliderText = styled(Typography)`
    margin-bottom: 10px;
    text-align: justify;
  `;
  
  const SliderControls = styled.div`
    position: absolute;
    bottom: 50px;
    right: 20px;
    display: flex;
    flex-direction: row;
  `;
  
  const SliderControlButton = styled(Button)`
    margin: 10px;
    background-color: transparent;
    color: #ffffff;
    padding: 8px;
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: none;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `;


  
  return (
    <SliderContainer>
      <SliderImage src={slides[currentIndex].image} alt={slides[currentIndex].title} />
      <SliderContent>
        

      <SliderControlButton onClick={handlePrev} style={{
        position: 'absolute',
        top: "0",
        left:0,
        marginTop:"-550px",
        color:"#FFFFFF",
        border:"solid 1px",
        borderRadius:"30px",
        borderColor:"#FFFFFF",
        cursor: 'pointer'
      }} >
        <span style={{ fontSize: 24 }}>&lt;</span>
      </SliderControlButton>
        <Button variant="h6" 
          style={{
            display:"flex", justifyContent:"flex-start",
            marginBottom:"10px", backgroundColor:"blue",
            borderRadius:"20px"}}>{slides[currentIndex].title
          }
        </Button>

        <SliderText variant="h6">{slides[currentIndex].subtitle}</SliderText>
        <SliderText variant="body1">{slides[currentIndex].text}</SliderText>
      </SliderContent>
      <SliderControls>
        <SliderControlButton onClick={handlePrev}>
          <span style={{ fontWeight: 'bold', fontSize: 24 , color:"#FFFFFF"}}>&lt;</span>
        </SliderControlButton>
        <SliderControlButton onClick={handleNext}>
          <span style={{ fontSize: 24, fontWeight: 'bold', color:"#FFFFFF" }}>&gt;</span>
        </SliderControlButton>
      </SliderControls>
    </SliderContainer>
  );
};

export default Slider;