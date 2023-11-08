
import React from 'react';
import styles from './ResearchPage.module.css';

const ResearchPage = () => {
  return (
    <div className={styles.researchContainer}>
    <div className={styles.imagesColumn}>
      <img src="/Smart Homes.png" alt="Smart Home" className={styles.researchImage} />
      {/* Add more images as needed */}
      <div className={styles.references}>
        <h3 className={styles.referencesTitle}>References</h3>
          <p>[1] B. D. Romaissa, O. Mourad and N. Brahim, "Vision-Based MultiModal Framework for Action    Recognition," in 2020 25th
            International Conference on Pattern Recognition (ICPR), Milan, 
            Italy, 2021. .</p>
          <p>[2] S. R. Rashmi, S. Bhat and V. C. Sushmitha, "Evaluation of human 
            action recognition techniques intended for video analytics," in 2017 
            International Conference On Smart Technologies For Smart Nation 
            (SmartTechCon), Bengaluru, India, 2017. .</p>
          <p>[3] A.M.F and S. Singh, "Computer Vision-based Survey on Human 
            Activity Recognition System, Challenges and Applications," in 2021 
            3rd International Conference on Signal Processing and 
            Communication (ICPSC), Coimbatore, India, 2021</p>
          <p>[4] D. Kim, C. Hwang and T. Lee, "Stacked-autoencoder based anomaly 
            detection with Industrial Control System," Software Engineering, 
            Artificial Intelligence, Networking and Parallel/Distributed 
            Computing, p. 191, 2021. </p>
          <p>[5] Y. Sun, J. Yang and C.-H. Hsu, "Anomaly Detection for Smart Home 
            Security Using Voice Recognition," IEEE Transactions on Industrial 
            Informatics, vol. 15, no. 6, pp. 3218-3226, 2019. </p>
          <p>[6] A. Ghandeharioun and R. W. Picard, "Smart Home Security: VoiceBased Anomaly Detection and Intrusion Prevention," IEEE 
            Transactions on Multimedia, vol. 19, no. 4, pp. 807-819, 2017.</p>
          <p>[7] S. Saha and S. Kar, "Securing Smart Homes with Blockchain 
                Technology," in IEEE International Conference on Internet of Things 
                (iThings) and IEEE Green Computing and Communications 
                (GreenCom) and IEEE Cyber, Physical and Social Computing 
                (CPSCom) and IEEE Smart Data (SmartData), Halifax, NS, Canada, 
                2018. </p>
          <p>[8] S. M. A. Saleh, M. T. Ibrahim, M. A. Razzaque and M. F. Mridha, "A 
                Blockchainbased Security Framework for IoT-enabled Smart 
                Homes," in 2019 IEEE 6th International Conference on Industrial 
                Engineering and Applications (ICIEA), Tokyo, Japan, 2019.</p>
          <p>[9] A. T. Khan, K. Salah and K. Alzahrani, "A Machine Learning 
                Approach for IoT Security Using Blockchain," in 2019 IEEE 5th 
                World Forum on Internet of Things (WF-IoT), Limerick, Ireland, 
                2019. </p>
          <p>[10] T. Nagamani, W. H. Beniga, K. S. Dhanish and A. S. Benitta, "AntiTheft Monitoring for a   Smart Home," in 2022 4th International 
            Conference on Smart Systems and Inventive Technology (ICSSIT), 
            Tirunelveli, India, 2022. </p>
          <p>[11] A. Nagy, M. Abdelftah and B. M. Yousef, "Smart Vehicle and AntiTheft System Using IoT," International Journal of Engineering 
            Inventions, pp. 1-5, 2020. </p>
          <p>[12] M. Musab, S. Kaloria, A. Chhipa, A. Sharma and F. Mansoori, "IOT 
            Based Anti-Theft Security System," International Journal for 
            Research Trends and Innovation, vol. 7, no. 6, pp. 106-109, 2022. </p>
          <p>[13] I. R. Parameshwaran and R. Prakash, "Anomaly Detection of Sounds 
            for Home Security Systems," IEEE Sensors Journal, vol. 18, no. 22, 
            pp. 9233-9242, 2018.</p>
            <img src="\\sys diagram.jpg" alt="Smart Home" className={styles.researchImage} />
            <section class="main-objective">
</section>
            </div>
            <h1>Main Objective</h1>
  <p>Create a cyber-threat free, fully functioning smart home monitoring and anti-theft system that enhances physical security through behavior pattern and voice pattern monitoring, and features energy-saving and protective plug bases.</p>

  <section class="sub-objectives">
  <h2>Sub Objectives</h2>
  <ul>
    <li>Enhance the physical security in a modern house by preventing intruder access.</li>
    <li>Enhance the physical security in a modern house through anomaly (abnormal) voice detection.</li>
    <li>Enable secure data communication in a modern house to enhance the physical safety.</li>
    <li>Enable an electric hazard-free environment in a modern house.</li>
  </ul>
</section>

        </div>
        
      <div className={styles.content}>
     <section>
    <h2 class="highlight">LITERATURE REVIEW</h2>
    <p>This literature review aims to provide a comprehensive overview of the latest developments in these fields, focusing on environment monitoring and intelligent anti-theft systems. It analyzes research papers and scholarly articles to present a comprehensive snapshot of the current state of technology.</p>
    <p>The studies listed below provide an in-depth examination of the use of technology for Human Action Recognition (HAR) and abnormal behavior detection, specifically within the realm of video analytics. The "Vision-Based Multi-Modal Framework for Action Recognition" paper presents a system for human action recognition using multimodal data. It follows a three-step process: feature extraction, data fusion, and classification [1]. Multimodal approaches, using CNNs and LSTMs, outperform single-modal methods on public datasets.</p>
    <p>In the "Evaluation of Human Action Recognition Methods meant for Video Analytics," the authors assess various HAR techniques, with an emphasis on their application within security and surveillance sectors. Through their analysis, the Histogram of Oriented Gradients (HOG) method emerges as the most accurate in detecting human motion [2]. The study concludes with a call for more standardized datasets and consideration of environmental factors for further accuracy improvements.</p>
    <p>The "Computer Vision-based Survey on Human Activity Recognition System, Challenges and Applications" paper provides a comprehensive review of HAR systems and their components. The authors highlight the challenges HAR systems face, such as managing noisy and incomplete data and fluctuations in human activity [3]. They also emphasize potential research areas like multimodal data fusion, deep learning-based feature extraction, and transfer learning across domains, while highlighting the societal and individual benefits of such systems. Collectively, these studies highlight the potential of CNN and LSTM technology in improving security and surveillance systems and underscore the need for ongoing research in this area.</p>
</section>
<section>
    <p>When considering the voice and sound recognition technology related research, there are still only a few research papers on the practical use of this technology that have been found. These research papers broadly center on the theme of enhancing smart home security through the deployment of voice and sound anomaly detection techniques.</p>
    <p>Kim et al.’s paper on "Anomaly Voice Detection Using a Stacked Denoising Autoencoder for Smart Homes" focuses on using a stacked denoising autoencoder for feature extraction from audio signals [4]. Through comparative evaluations, the authors demonstrate the superiority of this method over conventional techniques in terms of accuracy and reduced false alarms, affirming its efficacy in noisy environments.</p>
    <p>The authors in "Anomaly Detection for Smart Home Security Using Voice Recognition" suggest the use of Deep Neural Networks for classifying sound data to improve security measures in smart homes [5]. Their proposed system has shown promising results, indicating practical potential for real-world application.</p>
    <p>The paper "Smart Home Security: Voice-Based Anomaly Detection and Intrusion Prevention" follows a similar thematic approach. They advocate for the inclusion of voice data as an additional layer of security in smart homes, highlighting their system's effectiveness with a low false positive rate [6].</p>
    <p>Finally, Parameshwaran and Prakash's paper titled "Anomaly Detection of Sounds for Home Security Systems" proposes using sound data and machine learning techniques to detect anomalies. They demonstrate more than an 80% accuracy rate and discuss the system's potential in burglar detection and unauthorized entry attempts. While these papers provide valuable insights, they also underscore the need for further extensive research, especially considering the performance of these methods in different scenarios and potential privacy concerns related to audio data collection.</p>
</section>
<article class="security-analysis">

  <header>
    <h1>Research Problem</h1>
  </header>

  <section class="static-rules">
    <h2>Static Rules and Vulnerabilities</h2>
    <p>Traditional home security systems often rely on a set of predefined rules and parameters to detect intrusions. For example, a door sensor might trigger an alarm if it detects the door opening without prior deactivation of the system, or a motion sensor might set off an alarm when movement is sensed in a designated area during set hours. While this can provide a basic level of security, burglars who understand these systems can find ways to circumvent them. They might, for instance, learn the timing of motion detectors or find blind spots in the surveillance coverage. Because these systems are not designed to evolve or learn from new types of security breaches, they remain susceptible to the same tactics once an intruder identifies a loophole.</p>
  </section>

  <section class="false-alarms">
    <h2>Erroneous Alarms and User Inconvenience</h2>
    <p>The simplicity of conventional security systems can also lead to a high number of false alarms, which are not only inconvenient and distressing for homeowners but can also desensitize them to alarms, reducing their vigilance. False alarms can be triggered by everyday activities such as pets moving around the house, balloons or curtains stirred by air currents, or even by family members forgetting to deactivate the system. Additionally, repeated false alarms can strain the relationship between homeowners and local law enforcement and can lead to fines or reduced priority in police responses. This challenge calls for systems that can better distinguish between routine household activities and actual security threats.</p>
  </section>

  <section class="adaptive-measures">
    <h2>Need for Sophisticated and Adaptive Security Measures</h2>
    <p>To enhance protection and minimize the incidence of false alarms, smart home security systems need to incorporate more intelligent and adaptive technologies. This means employing advanced algorithms and artificial intelligence to learn from patterns of behavior, recognize normal household activities, and adjust their parameters accordingly. For example, smart security could use facial recognition to identify family members, or behavioral analysis to understand that an object moving across a room is the family pet. By learning and adapting to the daily routines within a home, smart systems can reduce false positives and maintain a higher level of alert for activities that deviate from the norm. Additionally, they can use predictive analytics to anticipate potential security breaches by recognizing suspicious behavior or anomalies and can even integrate with home automation systems to create the appearance of occupancy when the house is empty, further deterring potential intruders.</p>
  </section>

</article>
<article class="home-security">

  <header>
    <h1>Solution</h1>
  </header>

  <section class="anomaly-detection-intro">
    <h2>Enhancing Home Security with Anomaly Detection</h2>
    <p>In the era of smart technology, home security systems must evolve to counteract sophisticated threats and minimize inconvenient false alarms. Leveraging the capabilities of Machine Learning (ML), our cutting-edge system brings anomaly detection to the forefront of home defense.</p>
  </section>

  <section class="adaptive-anomaly">
    <h2>Adaptive Anomaly Detection</h2>
    <p>Our innovative approach departs from the rigid, rule-based alarms that can no longer guarantee foolproof security. Instead, we employ anomaly detection which continuously analyzes a wide range of environmental factors and behaviors within your home. This advanced system learns what constitutes 'normal' activity through an array of sensors and inputs, enabling it to recognize when something unusual occurs. Whether it's an unrecognized voice pattern during a conversation or unexpected movements in the middle of the night, the system evaluates these anomalies in real-time to determine if they pose a genuine threat.</p>
  </section>

  <section class="behavior-voice-monitoring">
    <h2>Intelligent Monitoring of Behaviors and Voice Patterns</h2>
    <p>Visitor behavior and voice patterns are crucial indicators of potential security breaches. Our ML-powered system meticulously monitors these parameters, distinguishing between the residents, regular visitors, and strangers. It's not just about recognizing faces but understanding the nuances of how people move and sound in your home. This heightened awareness allows the system to detect any unusual behavior or unfamiliar voice patterns, alerting you to potential intruders without the common false alarms triggered by innocuous events.</p>
  </section>

  <section class="environmental-awareness">
    <h2>Environmental Awareness</h2>
    <p>A home's environment is a tapestry of information. From the sound of the wind against windows to the rhythm of daily routines, every aspect is a piece of a larger puzzle. Our system is designed to interpret these environmental cues, adding another layer of security. It understands the normalcy of a stormy night or the expected silence of an afternoon. Any deviation from this baseline, like the sound of glass breaking or the unusual movement of shadows, triggers a refined analysis to determine if it's a natural occurrence or a security concern.</p>
  </section>

  <section class="cyber-threat-protection">
    <h2>Cyber Threat Protection</h2>
    <p>In today's digital age, security isn't just about physical threats; it's also about cyber threats. Our ML-powered security system is fortified with robust cybersecurity measures, ensuring that while it safeguards your home from physical intrusions, it's also immune to virtual attacks. With end-to-end encryption and regular software updates, the system stands as an impenetrable fortress, not just against burglars, but against hackers as well.</p>
  </section>

</article>



      {/* Repeat for other sections */}
      </div>
    </div>
  );
};
export default ResearchPage;