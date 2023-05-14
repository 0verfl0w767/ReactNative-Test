import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import {Image as ReactImage} from 'react-native'
import Svg, {Defs, Pattern} from 'react-native-svg'
import {Path as SvgPath} from 'react-native-svg'
import {Text as SvgText} from 'react-native-svg'
import {Image as SvgImage} from 'react-native-svg'
import {useNavigation} from '@react-navigation/native'

export default class X1intro extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
      let name
      let id
      let index = -1
      if (target.search('::') > -1) {
        const varCount = target.split('::').length
        if (varCount === 2) {
          name = target.split('::')[0]
          id = target.split('::')[1]
        } else if (varCount === 3) {
          name = target.split('::')[0]
          index = parseInt(target.split('::')[1])
          id = target.split('::')[2]
        }
      } else {
        name = target
      }
      this.props.onPress({
        type: 'button',
        name: name,
        index: index,
        id: id,
        owner: owner,
      })
    }
  }

  handleChangeTextinput(name, value) {
    let id
    let index = -1
    if (name.search('::') > -1) {
      const varCount = name.split('::').length
      if (varCount === 2) {
        name = name.split('::')[0]
        id = name.split('::')[1]
      } else if (varCount === 3) {
        name = name.split('::')[0]
        index = name.split('::')[1]
        id = name.split('::')[2]
      }
    } else {
      name = name
    }
    let state = this.state
    state[name.split('::').join('')] = value
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: 'textinput',
          name: name,
          value: value,
          index: index,
          id: id,
        })
      }
    })
  }

  render() {
    return (
      <ScrollView
        data-layer="bd71b7e5-af52-42b4-9627-aaa1adb29193"
        // style={styles.x1intro}
        contentContainerStyle={[styles.x1intro, {flex: 1}]}>
        <View
          data-layer="8447846e-0da3-4150-89f4-754c1ad44f0f"
          style={styles.x1intro_x56}>
          <View
            data-layer="62b89b4a-21a0-4c97-a019-c3e6c56bd7fb"
            style={styles.x1intro_x56_x518089a8d0}>
            <View
              data-layer="7b96ef69-cca5-4965-baac-3c20c60dc0f2"
              style={styles.x1intro_x56_x518089a8d0_x2742e8f986}></View>
            <View
              data-layer="e58b248a-cda4-4c0e-afaf-38420a88f7a0"
              style={styles.x1intro_x56_x518089a8d0_x28d15b461b}></View>
            <Svg
              data-layer="4f4c666a-de11-49dd-bd62-b7ea7372845d"
              style={styles.x1intro_x56_x518089a8d0_x246fc57b77}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 0 C 0 0 6.492608547210693 4.248715400695801 13.1642427444458 4.248715400695801 C 19.83588981628418 4.248715400695801 26.68654823303223 0 26.68654823303223 0 L 26.68654823303223 26.68654823303223 C 26.68654823303223 26.68654823303223 20.07960510253906 22.0400562286377 13.40796852111816 22.0400562286377 C 6.736330032348633 22.0400562286377 0 26.68654823303223 0 26.68654823303223 L 0 0 Z" />
            </Svg>
          </View>
          <View
            data-layer="347f6c79-d634-4163-af1f-da6c4e2d807e"
            style={styles.x1intro_x56_x5256243194}>
            <View
              data-layer="32b35358-1c0e-4187-a133-a97b6f313b78"
              style={styles.x1intro_x56_x5256243194_x275b4b0e5a}></View>
            <View
              data-layer="dada7785-2681-4463-9275-88e2689fa8cd"
              style={styles.x1intro_x56_x5256243194_x28cab90bdd}></View>
            <Svg
              data-layer="61e21096-3e01-4249-b837-c17fd536ba04"
              style={styles.x1intro_x56_x5256243194_x2417c1edd1}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 0 C 0 0 6.492608547210693 4.248715400695801 13.1642427444458 4.248715400695801 C 19.83588981628418 4.248715400695801 26.68654823303223 0 26.68654823303223 0 L 26.68654823303223 26.68654823303223 C 26.68654823303223 26.68654823303223 20.07960510253906 22.0400562286377 13.40796852111816 22.0400562286377 C 6.736330032348633 22.0400562286377 0 26.68654823303223 0 26.68654823303223 L 0 0 Z" />
            </Svg>
          </View>
          <View
            data-layer="aab6a670-e3ab-424a-9bd6-b2a92fa705e9"
            style={styles.x1intro_x56_x5374f8cf78}>
            <View
              data-layer="f3ff1d20-9a44-4b35-96f4-19e985924fe9"
              style={styles.x1intro_x56_x5374f8cf78_x27ec22289f}></View>
            <View
              data-layer="66fa70e3-1460-4ad5-bd9b-a3ebff00e7c9"
              style={styles.x1intro_x56_x5374f8cf78_x287a4f17ab}></View>
            <Svg
              data-layer="d9ddf8f9-edf7-4cec-8c4b-cd0d5fefc38e"
              style={styles.x1intro_x56_x5374f8cf78_x241ca1d46c}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 0 C 0 0 6.492608547210693 4.248715400695801 13.1642427444458 4.248715400695801 C 19.83588981628418 4.248715400695801 26.68654823303223 0 26.68654823303223 0 L 26.68654823303223 26.68654823303223 C 26.68654823303223 26.68654823303223 20.07960510253906 22.0400562286377 13.40796852111816 22.0400562286377 C 6.736330032348633 22.0400562286377 0 26.68654823303223 0 26.68654823303223 L 0 0 Z" />
            </Svg>
          </View>
          <View
            data-layer="a60c86cd-6bf3-4be6-8455-44cf9211e2df"
            style={styles.x1intro_x56_x5409d76c75}>
            <View
              data-layer="c0b40d60-f5a1-4620-965a-91dd7748257b"
              style={styles.x1intro_x56_x5409d76c75_x27bab1b218}></View>
            <View
              data-layer="1498fcbb-a63f-4cb8-ad7b-b29982084812"
              style={styles.x1intro_x56_x5409d76c75_x28f9087ab9}></View>
            <Svg
              data-layer="df0f1a4a-8333-464a-b30d-6aecede0beab"
              style={styles.x1intro_x56_x5409d76c75_x24f7d13841}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 0 C 0 0 6.492608547210693 4.248715400695801 13.1642427444458 4.248715400695801 C 19.83588981628418 4.248715400695801 26.68654823303223 0 26.68654823303223 0 L 26.68654823303223 26.68654823303223 C 26.68654823303223 26.68654823303223 20.07960510253906 22.0400562286377 13.40796852111816 22.0400562286377 C 6.736330032348633 22.0400562286377 0 26.68654823303223 0 26.68654823303223 L 0 0 Z" />
            </Svg>
          </View>
          <View
            data-layer="3d8529a8-290f-49eb-a773-a34f150685e5"
            style={styles.x1intro_x56_x558eba924f}>
            <View
              data-layer="defdff69-207c-4a1d-aa7e-ad28ec59e4ae"
              style={styles.x1intro_x56_x558eba924f_x2769581f76}></View>
            <View
              data-layer="92f4a675-5e49-4f08-b106-e05a002bc139"
              style={styles.x1intro_x56_x558eba924f_x28f295a7b0}></View>
            <Svg
              data-layer="c5ba3d92-19c1-4b14-bca7-0f508dbd5870"
              style={styles.x1intro_x56_x558eba924f_x24fbeaacfd}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 0 C 0 0 6.492608547210693 4.248715400695801 13.1642427444458 4.248715400695801 C 19.83588981628418 4.248715400695801 26.68654823303223 0 26.68654823303223 0 L 26.68654823303223 26.68654823303223 C 26.68654823303223 26.68654823303223 20.07960510253906 22.0400562286377 13.40796852111816 22.0400562286377 C 6.736330032348633 22.0400562286377 0 26.68654823303223 0 26.68654823303223 L 0 0 Z" />
            </Svg>
          </View>
        </View>
        <Text
          data-layer="705f006d-3c09-4d2d-a70c-64d0a85638bc"
          style={styles.x1intro_x}>
          보기만 했던 스타일을 여기서 찾자!
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}>
          <View
            data-layer="2592b963-f31c-4107-9117-7fe378bc5f7d"
            style={styles.x1intro_x24c2af4a0f}></View>
          <Text
            data-layer="f0f2a741-f769-4620-951d-fb8343671fc6"
            style={styles.x1intro_xc3bbb4f2}>
            시작하기
          </Text>
        </TouchableOpacity>
        <ReactImage
          data-layer="586012f1-00cf-4ce6-8730-72bbc3064c50"
          source={require('./assets/x1.png')}
          style={styles.x1intro_x1}
        />
        <View
          data-layer="87bb74eb-a0ff-4ede-a625-3b0070c179f9"
          style={styles.x1intro_x32}>
          <View
            data-layer="9a6cde01-28f4-4c74-a37d-f5f5e504e311"
            style={styles.x1intro_x32_x37}></View>
          <Text
            data-layer="739d6073-1af0-4ca1-b3f4-3dd8ed76024f"
            style={styles.x1intro_x32_x34938508}>
            *박서준
          </Text>
        </View>
        <Text
          data-layer="21382fb2-a7c2-4ba1-8c47-4c296d19aa30"
          style={styles.x1intro_closetUp}>
          CLOSET UP
        </Text>
        <View
          data-layer="5bd453df-433a-4195-8f06-59c0df06d284"
          style={styles.x1intro_x57}>
          <View
            data-layer="e5fec6ba-b946-42f5-a890-51efa8704ff2"
            style={styles.x1intro_x57_x51}>
            <View
              data-layer="156fbf92-5268-4cd9-9204-c0d218597037"
              style={styles.x1intro_x57_x51_x278961655a}></View>
            <View
              data-layer="90cc3f40-967f-409f-aa44-9be04232efb0"
              style={styles.x1intro_x57_x51_x287869061d}></View>
            <Svg
              data-layer="d8a0d4b3-6651-4117-bf37-833cd50609a0"
              style={styles.x1intro_x57_x51_x2409d713ba}
              preserveAspectRatio="none"
              viewBox="0 0 26.686546325683594 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 26.68654823303223 C 0 26.68654823303223 6.492608547210693 22.43783187866211 13.1642427444458 22.43783187866211 C 19.83588981628418 22.43783187866211 26.68654823303223 26.68654823303223 26.68654823303223 26.68654823303223 L 26.68654823303223 0 C 26.68654823303223 0 20.07960510253906 4.646492004394531 13.40796852111816 4.646492004394531 C 6.736330032348633 4.646492004394531 0 0 0 0 L 0 26.68654823303223 Z" />
            </Svg>
          </View>
          <View
            data-layer="dbd9a23a-ebe2-461b-8ad0-fb0e4ef9fc48"
            style={styles.x1intro_x57_x52}>
            <View
              data-layer="a32f6d6f-80db-4621-8b84-2b560b567ea6"
              style={styles.x1intro_x57_x52_x27b8daba88}></View>
            <View
              data-layer="ecbe6ccc-d88f-4980-8290-c5d2eb484392"
              style={styles.x1intro_x57_x52_x28f65968f4}></View>
            <Svg
              data-layer="835fd118-4c5e-49ad-9217-448925aff98d"
              style={styles.x1intro_x57_x52_x241101b703}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 26.68654823303223 C 0 26.68654823303223 6.492608547210693 22.43783187866211 13.1642427444458 22.43783187866211 C 19.83588981628418 22.43783187866211 26.68654823303223 26.68654823303223 26.68654823303223 26.68654823303223 L 26.68654823303223 0 C 26.68654823303223 0 20.07960510253906 4.646492004394531 13.40796852111816 4.646492004394531 C 6.736330032348633 4.646492004394531 0 0 0 0 L 0 26.68654823303223 Z" />
            </Svg>
          </View>
          <View
            data-layer="a6d157c1-6987-4706-b6d0-9ba802fcce67"
            style={styles.x1intro_x57_x53}>
            <View
              data-layer="50822a74-b30c-4a72-b300-f9584c4133da"
              style={styles.x1intro_x57_x53_x27c650fd66}></View>
            <View
              data-layer="f1b1705c-3184-457c-8711-3e3ade5cad7a"
              style={styles.x1intro_x57_x53_x288b8ffc53}></View>
            <Svg
              data-layer="c1774b2a-57f6-488c-8fb6-38c6b047904e"
              style={styles.x1intro_x57_x53_x2417aa9e0c}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 26.68654823303223 C 0 26.68654823303223 6.492608547210693 22.43783187866211 13.1642427444458 22.43783187866211 C 19.83588981628418 22.43783187866211 26.68654823303223 26.68654823303223 26.68654823303223 26.68654823303223 L 26.68654823303223 0 C 26.68654823303223 0 20.07960510253906 4.646492004394531 13.40796852111816 4.646492004394531 C 6.736330032348633 4.646492004394531 0 0 0 0 L 0 26.68654823303223 Z" />
            </Svg>
          </View>
          <View
            data-layer="ed8ead18-cf88-481b-bafb-ffdd104ac3b7"
            style={styles.x1intro_x57_x54}>
            <View
              data-layer="e3ff186f-cdca-453f-be52-770f21d8d8d4"
              style={styles.x1intro_x57_x54_x27f8804f3c}></View>
            <View
              data-layer="fe29c957-c0c4-4981-9b55-2f3533f52e1c"
              style={styles.x1intro_x57_x54_x284a8ed5a5}></View>
            <Svg
              data-layer="5cb11fb8-52d9-4908-b8fb-cef920a254b4"
              style={styles.x1intro_x57_x54_x2437649ebf}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 26.68654823303223 C 0 26.68654823303223 6.492608547210693 22.43783187866211 13.1642427444458 22.43783187866211 C 19.83588981628418 22.43783187866211 26.68654823303223 26.68654823303223 26.68654823303223 26.68654823303223 L 26.68654823303223 0 C 26.68654823303223 0 20.07960510253906 4.646492004394531 13.40796852111816 4.646492004394531 C 6.736330032348633 4.646492004394531 0 0 0 0 L 0 26.68654823303223 Z" />
            </Svg>
          </View>
          <View
            data-layer="fb3a4534-0df6-478c-91a5-6a688759a2c9"
            style={styles.x1intro_x57_x55}>
            <View
              data-layer="2c38464b-c2c1-4869-8637-85a8a7a683e2"
              style={styles.x1intro_x57_x55_x27}></View>
            <View
              data-layer="19d55934-caac-4028-bbad-bbc3758ca38a"
              style={styles.x1intro_x57_x55_x28}></View>
            <Svg
              data-layer="73c39fd8-e240-4082-b362-db81ea38cde3"
              style={styles.x1intro_x57_x55_x24}
              preserveAspectRatio="none"
              viewBox="0 0 26.686553955078125 26.6865234375"
              fill="rgba(255, 255, 255, 1)">
              <SvgPath d="M 0 26.68654823303223 C 0 26.68654823303223 6.492608547210693 22.43783187866211 13.1642427444458 22.43783187866211 C 19.83588981628418 22.43783187866211 26.68654823303223 26.68654823303223 26.68654823303223 26.68654823303223 L 26.68654823303223 0 C 26.68654823303223 0 20.07960510253906 4.646492004394531 13.40796852111816 4.646492004394531 C 6.736330032348633 4.646492004394531 0 0 0 0 L 0 26.68654823303223 Z" />
            </Svg>
          </View>
        </View>
      </ScrollView>
    )
  }
}

X1intro.propTypes = {}

X1intro.defaultProps = {}

const styles = StyleSheet.create({
  x1intro: {
    opacity: 1,
    position: 'relative',
    backgroundColor: 'rgba(10, 10, 10, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 393,
    height: 852,
    left: 0,
    top: 0,
  },
  x1intro_x56: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 310.5,
    height: 301,
    left: 42,
    top: 347,
  },
  x1intro_x56_x518089a8d0: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 203.5,
    top: 0,
  },
  x1intro_x56_x518089a8d0_x2742e8f986: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 0,
  },
  x1intro_x56_x518089a8d0_x28d15b461b: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 49,
  },
  x1intro_x56_x518089a8d0_x246fc57b77: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.29,
    top: 38.45,
  },
  x1intro_x56_x5256243194: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 152.5,
    top: 49,
  },
  x1intro_x56_x5256243194_x275b4b0e5a: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 0,
  },
  x1intro_x56_x5256243194_x28cab90bdd: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 49,
  },
  x1intro_x56_x5256243194_x2417c1edd1: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.29,
    top: 38.45,
  },
  x1intro_x56_x5374f8cf78: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 101.5,
    top: 98,
  },
  x1intro_x56_x5374f8cf78_x27ec22289f: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 0,
  },
  x1intro_x56_x5374f8cf78_x287a4f17ab: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 49,
  },
  x1intro_x56_x5374f8cf78_x241ca1d46c: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.29,
    top: 38.45,
  },
  x1intro_x56_x5409d76c75: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 50.5,
    top: 147,
  },
  x1intro_x56_x5409d76c75_x27bab1b218: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 0,
  },
  x1intro_x56_x5409d76c75_x28f9087ab9: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 49,
  },
  x1intro_x56_x5409d76c75_x24f7d13841: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.29,
    top: 38.45,
  },
  x1intro_x56_x558eba924f: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 0,
    top: 196,
  },
  x1intro_x56_x558eba924f_x2769581f76: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 0,
  },
  x1intro_x56_x558eba924f_x28f295a7b0: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 49,
  },
  x1intro_x56_x558eba924f_x24fbeaacfd: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.29,
    top: 38.45,
  },
  x1intro_x: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 35,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'LH',
    textAlign: 'center',
    lineHeight: 40,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 304,
    height: 83,
    left: 45,
    top: 72,
  },
  x1intro_x24c2af4a0f: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255, 255, 255, 1)',
    borderTopLeftRadius: 47,
    borderTopRightRadius: 47,
    borderBottomLeftRadius: 47,
    borderBottomRightRadius: 47,
    width: 345,
    height: 71, // original 65
    left: 24,
    top: 700, // original 738
  },
  x1intro_xc3bbb4f2: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'LH',
    textAlign: 'left',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 90, // original 85
    height: 28, // original 26
    left: 154,
    top: 720, // original 758
  },
  x1intro_x1: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 276,
    height: 413,
    left: 42,
    top: 242,
  },
  x1intro_x32: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 154,
    height: 29,
    left: 52,
    top: 617,
  },
  x1intro_x32_x37: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(1, 1, 1, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 47,
    borderTopRightRadius: 47,
    borderBottomLeftRadius: 47,
    borderBottomRightRadius: 47,
    width: 154, // original 154
    height: 35, // original 29
    left: 0,
    top: 0,
  },
  x1intro_x32_x34938508: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'LH',
    textAlign: 'left',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 55, // original 55
    height: 20, // original 18
    left: 50,
    top: 6,
  },
  x1intro_closetUp: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 25,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Century Gothic',
    textAlign: 'left',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 143,
    height: 27, // original 25
    left: 134,
    top: 180,
  },
  x1intro_x57: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 310.5,
    height: 301,
    left: 42,
    top: 347,
  },
  x1intro_x57_x51: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 0,
    top: 0,
  },
  x1intro_x57_x51_x278961655a: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 0,
  },
  x1intro_x57_x51_x287869061d: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 49,
  },
  x1intro_x57_x51_x2409d713ba: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.03,
    top: 38.45,
  },
  x1intro_x57_x52: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 51,
    top: 49,
  },
  x1intro_x57_x52_x27b8daba88: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 0,
  },
  x1intro_x57_x52_x28f65968f4: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 49,
  },
  x1intro_x57_x52_x241101b703: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.03,
    top: 38.45,
  },
  x1intro_x57_x53: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 102,
    top: 98,
  },
  x1intro_x57_x53_x27c650fd66: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 0,
  },
  x1intro_x57_x53_x288b8ffc53: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 49,
  },
  x1intro_x57_x53_x2417aa9e0c: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.03,
    top: 38.45,
  },
  x1intro_x57_x54: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 153,
    top: 147,
  },
  x1intro_x57_x54_x27f8804f3c: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 0,
  },
  x1intro_x57_x54_x284a8ed5a5: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 49,
  },
  x1intro_x57_x54_x2437649ebf: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.03,
    top: 38.45,
  },
  x1intro_x57_x55: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 107,
    height: 105,
    left: 203.5,
    top: 196,
  },
  x1intro_x57_x55_x27: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 0,
    top: 0,
  },
  x1intro_x57_x55_x28: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 56,
    height: 56,
    left: 51,
    top: 49,
  },
  x1intro_x57_x55_x24: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 26.69,
    height: 26.69,
    left: 40.03,
    top: 38.45,
  },
})
