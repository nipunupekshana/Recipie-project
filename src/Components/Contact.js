import React from "react";
import './contact.css'


const Contact = () => {

  





  return (
    <div>
      <p className="para tc  pl7 pr7 ml2 mr2  f3 lh-title  ">
        Nipun upekshana, Self learner,technolgy enthusiastic, an entrepreneur
        and a Graphic designer. Most recently, I've learned to build modern
        day web applications using React JS, and Javascript. I'm interested in
        seeking full-time or contract employment building the next Great
        things for the current world.
      </p>

      <div className="br3 ba dark-gray b--black-10 mv4 w-500 w-50-m w-25-l mw500 shadow-5 center">
        <main class="pa4 black-80">
          <form class="measure ">
            <fieldset id="contact" class="ba b--transparent ph0 mh0">
              <legend class="f4 fw6 ph0 mh0  b">
                Contact Us through here :
              </legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" htmlFor="email">
                  Email
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <label class="db fw6 lh-copy f6" htmlFor="message">
                  Message
                </label>
                <textarea
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  name="message"
                  placeholder="Your message here..."
                />
              </div>
            </fieldset>
            <div class="">
              <input
                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Contact;
