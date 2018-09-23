import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import 'react-toastify/dist/ReactToastify.min.css'

import Layout from '../components/layout'
import 'bulma'
import stories from '../resources/stories.png'
import marcelo from '../resources/marcelo.jpg'
import angel from '../resources/angel.jpg'
import alejandro from '../resources/alejandro.jpg'

import { Icon } from 'react-icons-kit'
import { check } from 'react-icons-kit/fa/check'
import { code } from 'react-icons-kit/fa/code'
import { ic_layers } from 'react-icons-kit/md/ic_layers'
import { slideshare } from 'react-icons-kit/fa/slideshare'
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare'

import {
  Container,
  Title,
  Subtitle,
  Column,
  Columns,
  Card,
  CardImage,
  Image,
  Content,
  CardContent,
  Media,
  MediaContent,
  MediaLeft,
  Field,
  Label,
  Control,
  Select,
  Input,
  TextArea,
  Checkbox,
  Button,
  Radio,
  Hero,
  HeroBody,
  Tag,
} from 'bloomer'

class Index extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const iframe =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.8011732692985!2d-80.194957!3d25.773847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69bc4ede3f9%3A0x16e796cf8c581432!2s66+W+Flagler+St+%23900%2C+Miami%2C+FL+33130%2C+EE.+UU.!5e0!3m2!1ses!2sve!4v1537197642139" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        {/*HEADER*/}
        <Hero isSize="large">
          <HeroBody className="bg-header">
            <Container>
              <Title className="title-logo">Cobuild Lab</Title>
              <Title className="subtitle-logo">Let’s Build a Great Idea</Title>
              <Columns>
                <Column isSize="1/2">
                  <Title isSize={6}>
                    We help entrepreneurs create amazing Products with our
                    streamlined, lean and phased{' '}
                    <span style={{ color: '#fff' }}>
                      Software Development Process.
                    </span>{' '}
                    Since day one, our technique is focused on early results and
                    transparent communication.
                  </Title>
                  <a className="button is-primary is-medium is-rounded">
                    Read more
                  </a>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        {/*HEADER*/}

        {/*Section Cobuild Process*/}
        <section id="process" className="section">
          <Container hasTextAlign="centered">
            <Title isSize={2} className="title-section">
              Cobuild Process
            </Title>
            <hr />
            <Subtitle isSize={6}>
              Is the process of transforming an idea in a sustainable business,
              through the combination and collaboration of the areas of Lean{' '}
              <br /> Entrepreneurship, Business Strategy, Technological
              Innovation and Exponential Growth
            </Subtitle>
            <Columns isCentered className="p-2">
              <Column isSize="1/4">
                <div className="icon-process">
                  <Icon size="24" icon={check} />
                </div>
                <Title isSize={4}>Validation</Title>
                <p>
                  Plain and simple: Don't offer what people doesn't want. - Idea
                  Validation: (Technical and Economical) - Market Validation:
                  (Estimation and Competitors Analysis) - Value and Growth
                  Hypothesis.
                </p>
              </Column>
              <Column isSize="1/4">
                <div className="icon-process">
                  <Icon size="24" icon={code} />
                </div>
                <Title isSize={4}>CoBuild</Title>
                <p>
                  It's time to build!. In this phase we combine a
                  multidisciplinary team to actually build the idea. -
                  Prototyping - Customers Archetypes - Minimum Viable Product
                  (MVP) - Live testing - A/B Testing - Product Market Fit -
                  Value and Growth Hypothesis (Again)
                </p>
              </Column>
              <Column isSize="1/4">
                <div className="icon-process">
                  <Icon size="24" icon={ic_layers} />
                </div>
                <Title isSize={4}>Close the Circle</Title>
                <p>
                  A very important step. Here we make sure that the idea has
                  every detail that is needed for been available to transform
                  effectively: Identity, purpose, values, and the correct tools
                  for launching are the main purpose of this step. - Branding -
                  WebSite and Social Networks - Strategy
                </p>
              </Column>
              <Column isSize="1/4">
                <div className="icon-process">
                  <Icon size="24" icon={slideshare} />
                </div>
                <Title isSize={4}>Acceleration</Title>
                <p>
                  Congratulations! We have proved to have a sustainable business
                  with a healthy growth rate. It's time to accelerate. At this
                  point our business strategy and marketing strategy must be on
                  the right track, so it's time to create High Impact. - Growth
                  Hacking: Short-Term Exponential Growth
                </p>
              </Column>
            </Columns>
            {/* <Columns isCentered>
              <Column>
                <a className="button is-primary is-medium is-rounded">
                  <small>Learn more</small>
                </a>
              </Column>
            </Columns> */}
          </Container>
        </section>
        {/*Section Cobuild Process*/}

        {/*Section Latest News*/}
        <section className="section">
          <Container hasTextAlign="centered">
            <Title className="title-section">Latest News</Title>
            <Columns isCentered>
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <Column isSize="1/3" key={node.fields.slug}>
                    <Link to={node.fields.slug}>
                      <Card className="link-card">
                        <Tag className="tag-category">
                          {node.frontmatter.category}
                        </Tag>
                        <CardImage
                          className="card-post"
                          style={{
                            backgroundImage: `url(${
                              node.frontmatter.image.publicURL
                            })`,
                          }}
                        />
                        <CardContent>
                          <Subtitle>{title}</Subtitle>
                          <small>{node.frontmatter.date}</small>
                        </CardContent>
                      </Card>
                    </Link>
                  </Column>
                )
              })}
            </Columns>
          </Container>
        </section>
        {/*Section Latest News*/}

        {/*Section Customer Success Stories*/}
        {/* <section className="section bg-section">
            <Container hasTextAlign='centered'>
              <Title className="title-section">Customer Success Stories</Title>
              <Columns isCentered>
                <Column isSize='1/3'>
                  <Card className="link-card">
                    <Content>
                      <img src={stories} />
                    </Content>
                  </Card>
                </Column>
              </Columns>
            </Container>
          </section> */}
        {/*Section Customer Success Stories*/}

        <section className="section">
          <Container hasTextAlign="centered">
            <Title className="title-section">Our Team</Title>
            <Columns isCentered>
              <Column isSize="1/3">
                <Card>
                  <a href="https://www.linkedin.com" target="_blank">
                    <CardImage>
                      <Image isRatio="4:8" src={marcelo} />
                      <p className="name-team">Someone 1</p>
                    </CardImage>
                  </a>
                </Card>
                <Content>
                  <br />
                  <small>
                    Co-founded Startups in Venezuela, Ecuador and USA
                  </small>
                  <br />
                  <Icon size="18" icon={envelopeO} />
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com"
                    target="_blank"
                  >
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
              <Column isSize="1/3">
                <Card>
                  <a href="https://www.linkedin.com" target="_blank">
                    <CardImage>
                      <Image isRatio="4:8" src={angel} />
                      <p className="name-team">Someone 2</p>
                    </CardImage>
                  </a>
                </Card>
                <Content>
                  <br />
                  <small>Technical Product Owner and Software Developer</small>
                  <br />
                  <Icon size="18" icon={envelopeO} />
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com"
                    target="_blank"
                  >
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
              <Column isSize="1/3">
                <Card>
                  <a href="https://www.linkedin.com" target="_blank">
                    <CardImage>
                      <Image isRatio="4:8" src={alejandro} />
                      <p className="name-team">Someone 3</p>
                    </CardImage>
                  </a>
                </Card>
                <Content>
                  <br />
                  <small>
                    I'm a computer engineer with all my life dedicated to the
                    coding industry through several initiatives.
                  </small>
                  <br />
                  <Icon size="18" icon={envelopeO} />
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com"
                    target="_blank"
                  >
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
            </Columns>
          </Container>
        </section>
        {/*Section Customer Success Stories*/}

        {/*Section Where we are? and Write Us! */}
        <section id="contact" className="section bg-section">
          <Container>
            <Columns isCentered>
              <Column className="p-f" isSize="1/2">
                <Title className="title-section" hasTextAlign="left">
                  Where we are?
                </Title>
                <Card>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.8011732692985!2d-80.194957!3d25.773847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69bc4ede3f9%3A0x16e796cf8c581432!2s66+W+Flagler+St+%23900%2C+Miami%2C+FL+33130%2C+EE.+UU.!5e0!3m2!1ses!2sve!4v1537197642139"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0, width: '100%' }}
                    allowFullScreen
                  />
                </Card>
              </Column>
              <Column className="p-f" isSize="1/2">
                <Title className="title-section" hasTextAlign="left">
                  Write Us!
                </Title>
                <Content isSize="small">
                  Your business takes off right now
                </Content>
                <form onSubmit={e => this.onSubmit(e)}>
                  <Columns>
                    <Column isSize="1/2">
                      <Field>
                        <Label>First Name</Label>
                        <Control>
                          <Input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={e => this.handleChange(e)}
                          />
                        </Control>
                      </Field>
                    </Column>
                    <Column isSize="1/2">
                      <Field>
                        <Label>Last Name</Label>
                        <Control>
                          <Input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={e => this.handleChange(e)}
                          />
                        </Control>
                      </Field>
                    </Column>
                  </Columns>
                  <Field>
                    <Label>Email</Label>
                    <Control>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Comment or Message</Label>
                    <Control>
                      <TextArea
                        name="message"
                        placeholder="Your message or comment goes here"
                        value={this.state.message}
                        onChange={e => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field isGrouped>
                    <Control>
                      <button
                        className="button is-primary is-medium is-rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                    </Control>
                  </Field>
                  <Content hasTextAlign="centered">
                    <Subtitle>Privacy Policy</Subtitle>
                    <a href="#">
                      Here you can access the information about how we treat
                      your data.
                    </a>
                  </Content>
                </form>
              </Column>
            </Columns>
          </Container>
        </section>
        {/*Section Where we are? and Write Us! */}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 480) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
