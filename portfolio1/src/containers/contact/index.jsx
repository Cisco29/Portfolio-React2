import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importer les icônes de FontAwesome
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, description } = formData;
    const mailtoLink = `mailto:support@example.com?subject=Contact%20Form&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0ADescription:%20${description}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={handleSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div className="descriptionWrapper"> {/* Nouvelle div pour envelopper les icônes */}
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type="text"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <div className="socialLinks"> {/* Div pour les icônes */}
                    <a href="https://github.com/Cisco29"><FaGithub className="yellow" size={20} /></a> {/* Lien vers GitHub avec icône */}
                    <a href="https://www.linkedin.com/in/francisco-castro-47a8a1260/"><FaLinkedin className="yellow" size={20} /></a> {/* Lien vers LinkedIn avec icône */}
                  </div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
