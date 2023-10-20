import { Content } from 'antd/es/layout/layout';

import telegram from '../assets/icons/telegram.svg';
import gitHub from '../assets/icons/gitHub.svg';
import linkedIn from '../assets/icons/linkedIn.svg';
import { TitleComponent } from '../components/Title';
import { BaseLink } from '../components/BaseLink';

function ContactsPage() {
  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Contacts page</TitleComponent>
      <section className="flexCenter contentWrapper">
        <ul className="flexCenter contactsList">
          <li>
            <h2>Location</h2>
            Saint-Petersburg, Russia
          </li>
          <li>
            <h2>Phone / WhatsApp</h2>
            <BaseLink href="tel:+79641872190">+7 (964) 187-21-90</BaseLink>
          </li>
          <li>
            <h2>Telegram</h2>
            <BaseLink href="https://t.me/KamajorQA">@KamajorQA</BaseLink>
          </li>
          <li>
            <h2>Email</h2>
            <BaseLink href="mailto:kamajor@mail.ru">kamajor@mail.ru</BaseLink>
          </li>
        </ul>

        <ul className="flexCenter socials">
          <li>
            <BaseLink href="https://t.me/KamajorQA">
              <img src={telegram} alt="Telegram Link" className="socialIcon" />
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://github.com/KamajorQA">
              <img src={gitHub} alt="GitHub Link" className="socialIcon" />
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://www.linkedin.com/in/KamajorQA">
              <img src={linkedIn} alt="LinkedIn Link" className="socialIcon" />
            </BaseLink>
          </li>
        </ul>
      </section>
    </Content>
  );
}

export default ContactsPage;
