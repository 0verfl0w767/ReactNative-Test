import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import {Image as ReactImage} from 'react-native'
import Svg, {Defs, Pattern} from 'react-native-svg'
import {Path as SvgPath} from 'react-native-svg'
import {Text as SvgText} from 'react-native-svg'
import {Image as SvgImage} from 'react-native-svg'

export default class X8cart extends Component {
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
      <View style={{flex: 1}}>
        <ScrollView
          data-layer="2720c481-17fd-424a-b4a1-048e7412c37e"
          contentContainerStyle={styles.x8cart}>
          <View
            data-layer="5c1c366e-4a8e-4c97-928d-b8e45a6d1274"
            style={styles.x8cart_x21}>
            <View
              data-layer="6e2e6cf2-ddf7-44e1-9d57-acd1e7879475"
              style={styles.x8cart_x21_x20}>
              <View
                data-layer="d55b7103-1bd1-4451-8736-4187b83ef815"
                style={styles.x8cart_x21_x20_x13d80de06f}></View>
            </View>
          </View>
          <Text
            data-layer="675ab400-7770-4303-be4a-716e9e64ba06"
            style={styles.x8cart_x}>
            장바구니 목록
          </Text>
          <Svg
            data-layer="f5dbe687-83b5-447e-b891-564e37bdd7d3"
            style={styles.x8cart_x13}
            preserveAspectRatio="none"
            viewBox="0 -0.5 341 1"
            fill="transparent">
            <SvgPath d="M 0 0 L 341 0" />
          </Svg>
          <Svg
            data-layer="57857f35-d70e-4d06-a22b-83c8264e57ca"
            style={styles.x8cart_x14}
            preserveAspectRatio="none"
            viewBox="0 -0.5 341 1"
            fill="transparent">
            <SvgPath d="M 0 0 L 341 0" />
          </Svg>
          <Svg
            data-layer="749738da-3c36-4d07-b706-49b987e7b894"
            style={styles.x8cart_x15}
            preserveAspectRatio="none"
            viewBox="0 -0.5 341 1"
            fill="transparent">
            <SvgPath d="M 0 0 L 341 0" />
          </Svg>
          <View
            data-layer="b2969508-2c3b-4e37-915a-66e509a19c09"
            style={styles.x8cart_x77}>
            <View
              data-layer="d32dd91d-eeec-4bb1-9062-5ce82fb8aa14"
              style={styles.x8cart_x77_x6}></View>
            <Text
              data-layer="90bb96d0-3c9d-40a0-8a00-09eb8d7a2c35"
              style={styles.x8cart_x77_xd5c9eb83}>
              결제하기
            </Text>
          </View>
          <View
            data-layer="ef23f237-af37-4232-b071-6fb5da47c54b"
            style={styles.x8cart_x76}>
            <View
              data-layer="d74675f9-436f-454b-bcd3-5abd1ea9b03f"
              style={styles.x8cart_x76_x7}></View>
            <Text
              data-layer="6c3724c4-a50f-436b-8bad-c6ea4d2179d4"
              style={styles.x8cart_x76_x55810f10}>
              삭제하기
            </Text>
          </View>
          <View
            data-layer="5a8fdfcb-d005-4f89-9347-c3f82acbe795"
            style={styles.x8cart_x79}>
            <ReactImage
              data-layer="9d0f8314-1962-46b8-b0e5-b2bb9b257941"
              source={require('./assets/x1000534392610i11100f128d8f8.png')}
              style={styles.x8cart_x79_x1000534392610i11100f128d8f8}
            />
            <Text
              data-layer="7022b39a-0d76-46f6-9f56-d1e8abeadcde"
              style={styles.x8cart_x79_ufca0740eb8}>
              UFC 액티브 빅로고 릴렉스핏..
            </Text>
            <Text
              data-layer="9757f913-c535-43b8-8ace-3ee8c57372d2"
              style={styles.x8cart_x79_x59000877f0f29}>
              59,000원
            </Text>
            <View
              data-layer="0ce0c662-5362-4313-bcef-c0e7a3b3af80"
              style={styles.x8cart_x79_x78c05b5ccc}>
              <Svg
                data-layer="aebf7516-dae9-49ce-b6ac-ce78bddc7aa7"
                style={styles.x8cart_x79_x78c05b5ccc_x1717ebc083}
                preserveAspectRatio="none"
                viewBox="0 0 33 33"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 16.5 0 C 25.61269760131836 0 33 7.387302398681641 33 16.5 C 33 25.61269760131836 25.61269760131836 33 16.5 33 C 7.387302398681641 33 0 25.61269760131836 0 16.5 C 0 7.387302398681641 7.387302398681641 0 16.5 0 Z" />
              </Svg>
              <View
                data-layer="ce91a5e2-59d6-474a-b08c-a32f6477dc5c"
                style={styles.x8cart_x79_x78c05b5ccc_cancel393f3754}>
                <Svg
                  data-layer="fa5907b4-27d8-4903-a876-0ebaabf772fa"
                  style={
                    styles.x8cart_x79_x78c05b5ccc_cancel393f3754_x26e2021462
                  }
                  preserveAspectRatio="none"
                  viewBox="0 0.04800000041723251 12.80322265625 12.80322265625"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 8.373307228088379 6.449611186981201 L 12.80322265625 10.87952613830566 L 10.83152675628662 12.85122203826904 L 6.401611328125 8.421306610107422 L 1.971696257591248 12.85122203826904 L 0 10.87952613830566 L 4.429914951324463 6.449611186981201 L 0 2.019696235656738 L 1.971696257591248 0.04800000041723251 L 6.401611328125 4.477914810180664 L 10.83152675628662 0.04800000041723251 L 12.80322265625 2.019696235656738 L 8.373307228088379 6.449611186981201 Z" />
                </Svg>
              </View>
            </View>
          </View>
          <View
            data-layer="a1cd66d6-7ec1-436d-b681-0b2094fe28bf"
            style={styles.x8cart_x80}>
            <ReactImage
              data-layer="d5b9e657-3cba-4b4d-b552-35a81eabebc2"
              source={require('./assets/x1000534392610i11100baf8aa8c.png')}
              style={styles.x8cart_x80_x1000534392610i11100baf8aa8c}
            />
            <Text
              data-layer="fdcdda3f-59c8-46d1-9e25-8f928abf4c4f"
              style={styles.x8cart_x80_ufc91cc88ff}>
              UFC 액티브 빅로고 릴렉스핏..
            </Text>
            <Text
              data-layer="b8149fd9-42ed-4f3e-8483-98bd9249950b"
              style={styles.x8cart_x80_x590003fd79c7a}>
              59,000원
            </Text>
            <View
              data-layer="0a5fdf71-8ba9-4ebc-a0e8-5b245485dbd7"
              style={styles.x8cart_x80_x78b8fdb83a}>
              <Svg
                data-layer="3f365f49-3e9d-46ea-9774-e67f8baf23f4"
                style={styles.x8cart_x80_x78b8fdb83a_x17aaec7830}
                preserveAspectRatio="none"
                viewBox="0 0 33 33"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 16.5 0 C 25.61269760131836 0 33 7.387302398681641 33 16.5 C 33 25.61269760131836 25.61269760131836 33 16.5 33 C 7.387302398681641 33 0 25.61269760131836 0 16.5 C 0 7.387302398681641 7.387302398681641 0 16.5 0 Z" />
              </Svg>
              <View
                data-layer="9a0769ce-d31f-4976-bf28-dd58b35fde63"
                style={styles.x8cart_x80_x78b8fdb83a_cancel7a9be608}>
                <Svg
                  data-layer="ec4f7b7e-5575-40d2-b6cf-aa9d65c341cc"
                  style={
                    styles.x8cart_x80_x78b8fdb83a_cancel7a9be608_x265008984e
                  }
                  preserveAspectRatio="none"
                  viewBox="0 0.04800000041723251 12.80322265625 12.80322265625"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 8.373307228088379 6.449611186981201 L 12.80322265625 10.87952613830566 L 10.83152675628662 12.85122203826904 L 6.401611328125 8.421306610107422 L 1.971696257591248 12.85122203826904 L 0 10.87952613830566 L 4.429914951324463 6.449611186981201 L 0 2.019696235656738 L 1.971696257591248 0.04800000041723251 L 6.401611328125 4.477914810180664 L 10.83152675628662 0.04800000041723251 L 12.80322265625 2.019696235656738 L 8.373307228088379 6.449611186981201 Z" />
                </Svg>
              </View>
            </View>
          </View>
          <View
            data-layer="05cd484a-886a-4af7-91ca-9501df9fadf3"
            style={styles.x8cart_x81}>
            <ReactImage
              data-layer="f8748faf-4ced-4b91-a00b-dce66454b352"
              source={require('./assets/x1000534392610i11100086a6fc5.png')}
              style={styles.x8cart_x81_x1000534392610i11100086a6fc5}
            />
            <Text
              data-layer="ef2d443c-c040-45a8-98a8-3f7066ae4484"
              style={styles.x8cart_x81_ufc0eb6e6cb}>
              UFC 액티브 빅로고 릴렉스핏..
            </Text>
            <Text
              data-layer="8be996f7-4f7e-4ffd-b18d-fad5aaa971fa"
              style={styles.x8cart_x81_x59000e442e091}>
              59,000원
            </Text>
            <View
              data-layer="d83e762a-ac49-4439-962e-c8c5480a0608"
              style={styles.x8cart_x81_x78dfc8ca4c}>
              <Svg
                data-layer="4c9367b4-b651-4d52-a339-4fb81e420330"
                style={styles.x8cart_x81_x78dfc8ca4c_x17619d9216}
                preserveAspectRatio="none"
                viewBox="0 0 33 33"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 16.5 0 C 25.61269760131836 0 33 7.387302398681641 33 16.5 C 33 25.61269760131836 25.61269760131836 33 16.5 33 C 7.387302398681641 33 0 25.61269760131836 0 16.5 C 0 7.387302398681641 7.387302398681641 0 16.5 0 Z" />
              </Svg>
              <View
                data-layer="3ee6d5d7-88df-4747-b2e7-a5f77d9ec325"
                style={styles.x8cart_x81_x78dfc8ca4c_cancel1d3d1374}>
                <Svg
                  data-layer="94a8aefd-6fbf-4754-8b44-93a93b5bcbdc"
                  style={
                    styles.x8cart_x81_x78dfc8ca4c_cancel1d3d1374_x2684e0d01d
                  }
                  preserveAspectRatio="none"
                  viewBox="0 0.04800000041723251 12.80322265625 12.80322265625"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 8.373307228088379 6.449611186981201 L 12.80322265625 10.87952613830566 L 10.83152675628662 12.85122203826904 L 6.401611328125 8.421306610107422 L 1.971696257591248 12.85122203826904 L 0 10.87952613830566 L 4.429914951324463 6.449611186981201 L 0 2.019696235656738 L 1.971696257591248 0.04800000041723251 L 6.401611328125 4.477914810180664 L 10.83152675628662 0.04800000041723251 L 12.80322265625 2.019696235656738 L 8.373307228088379 6.449611186981201 Z" />
                </Svg>
              </View>
            </View>
          </View>
          <View
            data-layer="c7bc3e1e-5b16-4b22-9024-b7d558f7aec3"
            style={styles.x8cart_x82}>
            <ReactImage
              data-layer="479b766e-d99a-4311-9f97-0e82e7a545c8"
              source={require('./assets/x1000534392610i11100c8a61491.png')}
              style={styles.x8cart_x82_x1000534392610i11100c8a61491}
            />
            <Text
              data-layer="2c8412cc-bc10-4b91-a2c4-e9579e38483f"
              style={styles.x8cart_x82_ufc6ccd4005}>
              UFC 액티브 빅로고 릴렉스핏..
            </Text>
            <Text
              data-layer="6c6881e9-c099-4735-a266-083992e80263"
              style={styles.x8cart_x82_x590007c1aab09}>
              59,000원
            </Text>
            <View
              data-layer="07e817f4-749a-4d1d-bed2-531bd0b91658"
              style={styles.x8cart_x82_x78e77dc86f}>
              <Svg
                data-layer="efc53d34-85de-449f-b9a5-8b76879bb498"
                style={styles.x8cart_x82_x78e77dc86f_x17ad6eed4e}
                preserveAspectRatio="none"
                viewBox="0 0 33 33"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 16.5 0 C 25.61269760131836 0 33 7.387302398681641 33 16.5 C 33 25.61269760131836 25.61269760131836 33 16.5 33 C 7.387302398681641 33 0 25.61269760131836 0 16.5 C 0 7.387302398681641 7.387302398681641 0 16.5 0 Z" />
              </Svg>
              <View
                data-layer="35183fdf-085a-4ee1-a4d0-1f96b2164e9e"
                style={styles.x8cart_x82_x78e77dc86f_cancel2941184e}>
                <Svg
                  data-layer="bd0943c1-4dc7-469b-9626-f7fcf21d683c"
                  style={
                    styles.x8cart_x82_x78e77dc86f_cancel2941184e_x264485672a
                  }
                  preserveAspectRatio="none"
                  viewBox="0 0.04800000041723251 12.80322265625 12.80322265625"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 8.373307228088379 6.449611186981201 L 12.80322265625 10.87952613830566 L 10.83152675628662 12.85122203826904 L 6.401611328125 8.421306610107422 L 1.971696257591248 12.85122203826904 L 0 10.87952613830566 L 4.429914951324463 6.449611186981201 L 0 2.019696235656738 L 1.971696257591248 0.04800000041723251 L 6.401611328125 4.477914810180664 L 10.83152675628662 0.04800000041723251 L 12.80322265625 2.019696235656738 L 8.373307228088379 6.449611186981201 Z" />
                </Svg>
              </View>
            </View>
          </View>
          <View
            data-layer="c65ec1c5-8c74-4cb8-8d3a-14b8f3964f04"
            style={styles.x8cart_x83}>
            <ReactImage
              data-layer="677ab240-1280-46ad-bdf0-62c7f7b261bf"
              source={require('./assets/x1000534392610i11100f588e013.png')}
              style={styles.x8cart_x83_x1000534392610i11100f588e013}
            />
            <Text
              data-layer="4da0e721-1309-4e9c-8ce8-6c6ce43452b5"
              style={styles.x8cart_x83_ufc64e60633}>
              UFC 액티브 빅로고 릴렉스핏..
            </Text>
            <Text
              data-layer="b269538e-61b2-499e-ab2c-5a52bb5fdf96"
              style={styles.x8cart_x83_x59000a9c1d592}>
              59,000원
            </Text>
            <View
              data-layer="c185d6d2-89ac-4f5e-bc68-043768a7e851"
              style={styles.x8cart_x83_x786115cd2e}>
              <Svg
                data-layer="7294d884-0ca3-4c04-97b9-a756834eccce"
                style={styles.x8cart_x83_x786115cd2e_x170eb4c32c}
                preserveAspectRatio="none"
                viewBox="0 0 33 33"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 16.5 0 C 25.61269760131836 0 33 7.387302398681641 33 16.5 C 33 25.61269760131836 25.61269760131836 33 16.5 33 C 7.387302398681641 33 0 25.61269760131836 0 16.5 C 0 7.387302398681641 7.387302398681641 0 16.5 0 Z" />
              </Svg>
              <View
                data-layer="3e373cbb-8709-4c25-a8a3-124988251c3e"
                style={styles.x8cart_x83_x786115cd2e_cancel54edb211}>
                <Svg
                  data-layer="9476f71f-34be-455e-b496-fd6c99e74475"
                  style={
                    styles.x8cart_x83_x786115cd2e_cancel54edb211_x26542b0814
                  }
                  preserveAspectRatio="none"
                  viewBox="0 0.04800000041723251 12.80322265625 12.80322265625"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 8.373307228088379 6.449611186981201 L 12.80322265625 10.87952613830566 L 10.83152675628662 12.85122203826904 L 6.401611328125 8.421306610107422 L 1.971696257591248 12.85122203826904 L 0 10.87952613830566 L 4.429914951324463 6.449611186981201 L 0 2.019696235656738 L 1.971696257591248 0.04800000041723251 L 6.401611328125 4.477914810180664 L 10.83152675628662 0.04800000041723251 L 12.80322265625 2.019696235656738 L 8.373307228088379 6.449611186981201 Z" />
                </Svg>
              </View>
            </View>
          </View>
          <ReactImage
            data-layer="b058efd3-1e71-4f08-9b3a-161bbbf5be1e"
            source={require('./assets/x1000534392610i11100.png')}
            style={styles.x8cart_x1000534392610i11100}
          />
          <Text
            data-layer="5ef33df1-4623-4d51-a5e4-8e20a54d96a7"
            style={styles.x8cart_ufc}>
            UFC 액티브 빅로고 릴렉스핏..
          </Text>
          <Text
            data-layer="71625bdb-2c48-4bab-b6bf-395fae629821"
            style={styles.x8cart_x59000}>
            59,000원
          </Text>
          <View
            data-layer="c4b2dfc1-3ccd-45ba-919a-6afbb866a3c2"
            style={styles.x8cart_x78}>
            <Svg
              data-layer="12969369-f30e-4318-9d0d-f6a9b349d7de"
              style={styles.x8cart_x78_x17}
              preserveAspectRatio="none"
              viewBox="0 0 33 33"
              fill="rgba(42, 37, 38, 1)">
              <SvgPath d="M 16.5 0 C 25.61269760131836 0 33 7.387302398681641 33 16.5 C 33 25.61269760131836 25.61269760131836 33 16.5 33 C 7.387302398681641 33 0 25.61269760131836 0 16.5 C 0 7.387302398681641 7.387302398681641 0 16.5 0 Z" />
            </Svg>
            <View
              data-layer="d1c0ca8a-9715-4d6e-aed8-5581ec78b1b1"
              style={styles.x8cart_x78_cancel}>
              <Svg
                data-layer="7a80ffe8-a8d0-4aad-a94c-5fe33ee1ccfa"
                style={styles.x8cart_x78_cancel_x26}
                preserveAspectRatio="none"
                viewBox="0 0.04800000041723251 12.80322265625 12.80322265625"
                fill="rgba(255, 255, 255, 1)">
                <SvgPath d="M 8.373307228088379 6.449611186981201 L 12.80322265625 10.87952613830566 L 10.83152675628662 12.85122203826904 L 6.401611328125 8.421306610107422 L 1.971696257591248 12.85122203826904 L 0 10.87952613830566 L 4.429914951324463 6.449611186981201 L 0 2.019696235656738 L 1.971696257591248 0.04800000041723251 L 6.401611328125 4.477914810180664 L 10.83152675628662 0.04800000041723251 L 12.80322265625 2.019696235656738 L 8.373307228088379 6.449611186981201 Z" />
              </Svg>
            </View>
          </View>
          <Text
            data-layer="fb3ba5e5-81df-4c49-b53d-dcb5925ed3a4"
            style={styles.x8cart_x320000}>
            총합 : 320,000 원
          </Text>
        </ScrollView>
        <View
          data-layer="5a1f49b4-e424-40a4-99d0-862449c8d9bf"
          style={styles.x2home_x50}>
          <View
            data-layer="a888f52d-7f78-48c4-bbe9-68342b8c4f07"
            style={styles.x2home_x50_x121b19d503}></View>
          <View
            data-layer="b7ae4a54-80b8-4d43-a3a4-07080fca2e77"
            style={styles.x2home_x50_x19}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home')
              }}>
              <View
                data-layer="3a95dcd9-da9d-4403-8baf-05198049e675"
                style={styles.x2home_x50_x19_x18}>
                <Svg
                  data-layer="1a8ce08d-bd4d-4c99-adf8-d9ebdd8e4fc6"
                  style={styles.x2home_x50_x19_x18_x10}
                  preserveAspectRatio="none"
                  viewBox="0 0 8 8"
                  fill="rgba(235, 154, 92, 1)">
                  <SvgPath d="M 4 0 C 6.209138870239258 0 8 1.790861129760742 8 4 C 8 6.209138870239258 6.209138870239258 8 4 8 C 1.790861129760742 8 0 6.209138870239258 0 4 C 0 1.790861129760742 1.790861129760742 0 4 0 Z" />
                </Svg>
                <Text
                  data-layer="fed81b43-359c-4e58-8c4b-6105e537dc99"
                  style={styles.x2home_x50_x19_x18_home}>
                  HOME
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Expl')
              }}>
              <View
                data-layer="0f298bba-a31f-4fe1-b69e-af20bd6de0b2"
                style={styles.x2home_x50_x19_tag}>
                <Svg
                  data-layer="f7b0731e-d17c-44ea-8492-fc706a3d4b9b"
                  style={styles.x2home_x50_x19_tag_x3}
                  preserveAspectRatio="none"
                  viewBox="2.999999761581421 2.999999761581421 6.01580810546875 6.015869140625"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 9.01582145690918 6.00791072845459 C 9.01582145690918 7.669134140014648 7.669134140014648 9.01582145690918 6.00791072845459 9.01582145690918 C 4.346687316894531 9.01582145690918 2.999999761581421 7.669134140014648 2.999999761581421 6.00791072845459 C 2.999999761581421 4.346687316894531 4.346687316894531 2.999999761581421 6.00791072845459 2.999999761581421 C 7.669134140014648 2.999999761581421 9.01582145690918 4.346687316894531 9.01582145690918 6.00791072845459 Z M 7.010547637939453 6.00791072845459 C 7.010547637939453 5.454169273376465 6.561651229858398 5.005273818969727 6.00791072845459 5.005273818969727 C 5.454169273376465 5.005273818969727 5.005273818969727 5.454170227050781 5.005273818969727 6.00791072845459 C 5.005273818969727 6.561652183532715 5.454170227050781 7.010547637939453 6.00791072845459 7.010547637939453 C 6.561652183532715 7.010547637939453 7.010547637939453 6.561651229858398 7.010547637939453 6.00791072845459 Z" />
                </Svg>
                <Svg
                  data-layer="9e3eff22-d184-4840-997d-44dcde6f64fd"
                  style={styles.x2home_x50_x19_tag_x4}
                  preserveAspectRatio="none"
                  viewBox="1 1 27.24322509765625 27.2431640625"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 3.005273818969727 1 L 12.20145988464355 1 C 12.73281955718994 1 13.24283027648926 1.211235046386719 13.6188850402832 1.587242603302002 L 27.65610504150391 15.62446212768555 C 28.43892860412598 16.40752220153809 28.43892860412598 17.67686080932617 27.65610504150391 18.45992088317871 L 18.45992088317871 27.65610694885254 C 17.6768627166748 28.43893051147461 16.40752410888672 28.43893051147461 15.62446403503418 27.65610694885254 L 1.587547540664673 13.61919021606445 C 1.211458206176758 13.2432165145874 1.000113487243652 12.73324871063232 1 12.20145988464355 L 1 3.005273818969727 C 1 1.897791624069214 1.897791862487793 0.9999997615814209 3.005274295806885 1 Z M 3.005273818969727 12.20145988464355 L 17.04219055175781 26.23837661743164 L 26.23837661743164 17.04219055175781 L 12.20146083831787 3.005273818969727 L 3.005273818969727 3.005273818969727 L 3.005273818969727 12.20145988464355 Z" />
                </Svg>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Cart')
              }}>
              <Svg
                data-layer="5f347099-0c34-4bbc-8f10-00addade0bf8"
                style={styles.x2home_x50_x19_cart}
                preserveAspectRatio="none"
                viewBox="0 1.0000001192092896 27.12078857421875 27.12158203125"
                fill="rgba(255, 255, 255, 1)">
                <SvgPath d="M 0 1.904055118560791 C 0 1.404759168624878 0.4047592580318451 0.9999998807907104 0.9040549397468567 1.00000011920929 L 3.616219282150269 1.00000011920929 C 4.031153678894043 1.000114679336548 4.392738342285156 1.282672524452209 4.493152618408203 1.68527364730835 L 5.225436687469482 4.616219520568848 L 26.21758842468262 4.616219520568848 C 26.4863395690918 4.616467952728271 26.74104690551758 4.73627233505249 26.91261291503906 4.943131923675537 C 27.08418083190918 5.149991035461426 27.15482139587402 5.422459602355957 27.10537147521973 5.686620235443115 L 24.39320755004883 20.15149688720703 C 24.31319999694824 20.57890319824219 23.94025421142578 20.88880348205566 23.50542640686035 20.88920783996582 L 7.232438564300537 20.88920783996582 C 6.797609329223633 20.88880348205566 6.424664974212646 20.57890319824219 6.344656467437744 20.15149688720703 L 3.634300231933594 5.713742256164551 L 2.911056518554688 2.808109760284424 L 0.9040548205375671 2.808109760284424 C 0.4047591090202332 2.808109760284424 0 2.403350830078125 0 1.904055118560791 Z M 5.608756065368652 6.424329280853271 L 7.982803821563721 19.08109664916992 L 22.75506019592285 19.08109664916992 L 25.12910652160645 6.424329280853271 L 5.608756065368652 6.424329280853271 Z M 9.040548324584961 20.88920783996582 C 7.043365478515625 20.88920783996582 5.424329280853271 22.50824356079102 5.424329280853271 24.50542640686035 C 5.424329280853271 26.50260925292969 7.043365478515625 28.12164306640625 9.040548324584961 28.12164306640625 C 11.03773021697998 28.12164306640625 12.65676784515381 26.50260925292969 12.65676784515381 24.50542640686035 C 12.65676784515381 22.50824356079102 11.03773021697998 20.88920783996582 9.040548324584961 20.88920783996582 Z M 21.69731712341309 20.88920783996582 C 19.70013236999512 20.88920783996582 18.08109664916992 22.50824356079102 18.08109664916992 24.50542640686035 C 18.08109664916992 26.50260925292969 19.70013236999512 28.12164306640625 21.69731712341309 28.12164306640625 C 23.69449806213379 28.12164306640625 25.31353569030762 26.50260925292969 25.31353569030762 24.50542640686035 C 25.31353569030762 22.50824356079102 23.69449806213379 20.88920783996582 21.69731712341309 20.88920783996582 Z M 9.040548324584961 22.69731712341309 C 10.03913879394531 22.69731712341309 10.84865856170654 23.50683403015137 10.84865856170654 24.50542640686035 C 10.84865856170654 25.5040168762207 10.03913879394531 26.31353378295898 9.040548324584961 26.31353378295898 C 8.041956901550293 26.31353378295898 7.232438564300537 25.50401496887207 7.232438564300537 24.50542640686035 C 7.232438564300537 23.50683212280273 8.041956901550293 22.69731712341309 9.040548324584961 22.69731712341309 Z M 21.69731712341309 22.69731712341309 C 22.69590759277344 22.69731712341309 23.50542640686035 23.50683403015137 23.50542640686035 24.50542640686035 C 23.50542640686035 25.5040168762207 22.6959056854248 26.31353378295898 21.69731712341309 26.31353378295898 C 20.69872283935547 26.31353378295898 19.88920593261719 25.50401496887207 19.88920593261719 24.50542640686035 C 19.88920593261719 23.50683212280273 20.6987247467041 22.69731712341309 21.69731712341309 22.69731712341309 Z" />
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile')
              }}>
              <View
                data-layer="84c24c35-16fe-4c87-a3ee-e9bcc3e544c6"
                style={styles.x2home_x50_x19_personCircle2}>
                <Svg
                  data-layer="75dbcdd5-ed2c-4cc4-a2d4-35e9659b8a32"
                  style={styles.x2home_x50_x19_personCircle2_x5f0b3bb45}
                  preserveAspectRatio="none"
                  viewBox="5 3.000000476837158 10.17059326171875 10.170654296875"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 15.17061614990234 8.085308074951172 C 15.17061614990234 10.89384651184082 12.89384746551514 13.17061614990234 10.08530807495117 13.17061614990234 C 7.276769638061523 13.17061614990234 5 10.89384651184082 5 8.085308074951172 C 5 5.276769638061523 7.27677059173584 3.000000476837158 10.08530807495117 3.000000476837158 C 12.89384746551514 3.000000476837158 15.17061614990234 5.27677059173584 15.17061614990234 8.085308074951172 Z" />
                </Svg>
                <Svg
                  data-layer="d2e8ed7c-19ef-4d4f-8695-e39be1d459d4"
                  style={styles.x2home_x50_x19_personCircle2_x6}
                  preserveAspectRatio="none"
                  viewBox="0 0 27.12164306640625 27.12158203125"
                  fill="rgba(255, 255, 255, 1)">
                  <SvgPath d="M 0 13.56082153320312 C 0 6.071386337280273 6.07138729095459 0 13.56082153320312 0 C 21.05025672912598 0 27.12164306640625 6.07138729095459 27.12164306640625 13.56082153320312 C 27.12164306640625 21.05025672912598 21.05025672912598 27.12164306640625 13.56082057952881 27.12164306640625 C 6.071386337280273 27.12164306640625 0 21.05025672912598 0 13.56082057952881 Z M 13.56082153320312 1.695102691650391 C 9.001447677612305 1.695102691650391 4.844856739044189 4.308261394500732 2.868327856063843 8.417641639709473 C 0.8917436599731445 12.52769374847412 1.445256114006042 17.40616416931152 4.292003631591797 20.96842384338379 C 5.495523452758789 19.02922248840332 8.144968032836914 16.95102691650391 13.56082153320312 16.95102691650391 C 18.97667503356934 16.95102691650391 21.62442588806152 19.02752876281738 22.82964515686035 20.96842002868652 C 25.67639350891113 17.40616226196289 26.22990608215332 12.52769088745117 24.25359153747559 8.418208122253418 C 22.27728271484375 4.308724403381348 18.12083053588867 1.6953444480896 13.56082344055176 1.695102691650391 Z" />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

X8cart.propTypes = {}

X8cart.defaultProps = {}

const styles = StyleSheet.create({
  x8cart: {
    opacity: 1,
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 1)',
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
  x8cart_x21: {
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
    width: 446,
    height: 127,
    left: -8,
    top: 781,
  },
  x8cart_x21_x20: {
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
    width: 446,
    height: 127,
    left: 0,
    top: 0,
  },
  x8cart_x21_x20_x13d80de06f: {
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
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 446,
    height: 127,
    left: 0,
    top: 0,
  },
  x8cart_x22: {
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
    width: 361,
    height: 77,
    left: 16,
    top: 760,
  },
  x8cart_x22_x12: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(42, 37, 38, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    borderBottomLeftRadius: 39,
    borderBottomRightRadius: 39,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.47843137254901963,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 361,
    height: 77,
    left: 0,
    top: 0,
  },
  x8cart_x19: {
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
    width: 177.24,
    height: 27.24,
    left: 153.88,
    top: 786.76,
  },
  x8cart_x19_tag: {
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
    width: 27.24,
    height: 27.24,
    left: 0,
    top: 0,
  },
  x8cart_x19_tag_x3: {
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
    width: 6.02,
    height: 6.02,
    left: 4.01,
    top: 4.01,
  },
  x8cart_x19_tag_x4: {
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
    width: 27.24,
    height: 27.24,
    left: 0,
    top: 0,
  },
  x8cart_x19_personCircle2: {
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
    width: 27.12,
    height: 27.12,
    left: 150.12,
    top: 0.12,
  },
  x8cart_x19_personCircle2_x5: {
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
    width: 10.17,
    height: 10.17,
    left: 8.48,
    top: 5.09,
  },
  x8cart_x19_personCircle2_x68508660c: {
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
    width: 27.12,
    height: 27.12,
    left: 0,
    top: 0,
  },
  x8cart_home: {
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
    width: 27.12,
    height: 27.12,
    left: 75,
    top: 784.94,
  },
  x8cart_home_x25: {
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
    width: 27.12,
    height: 27.12,
    left: 0,
    top: 0,
  },
  x8cart_x75: {
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
    width: 41,
    height: 32,
    left: 228,
    top: 782,
  },
  x8cart_x75_x10: {
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
    width: 8,
    height: 8,
    left: 16,
    top: 0,
  },
  x8cart_x75_cart: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
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
    width: 41,
    height: 16,
    left: 0,
    top: 16,
  },
  x8cart_x: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 25,
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
    width: 145,
    height: 28,
    left: 124,
    top: 32,
  },
  x8cart_x13: {
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
    width: 341,
    height: 1,
    left: 26.5,
    top: 78,
  },
  x8cart_x14: {
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
    width: 341,
    height: 1,
    left: 26.5,
    top: 593,
  },
  x8cart_x15: {
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
    width: 341,
    height: 1,
    left: 26.5,
    top: 78,
  },
  x8cart_x77: {
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
    width: 167,
    height: 54,
    left: 203,
    top: 687,
  },
  x8cart_x77_x6: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(42, 37, 38, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
    width: 167,
    height: 54,
    left: 0,
    top: 0,
  },
  x8cart_x77_xd5c9eb83: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
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
    width: 64,
    height: 20,
    left: 51,
    top: 17,
  },
  x8cart_x76: {
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
    width: 167,
    height: 54,
    left: 24,
    top: 687,
  },
  x8cart_x76_x7: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
    width: 167,
    height: 54,
    left: 0,
    top: 0,
  },
  x8cart_x76_x55810f10: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 18,
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
    width: 65,
    height: 20,
    left: 51,
    top: 17,
  },
  x8cart_x79: {
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
    width: 333,
    height: 68,
    left: 27,
    top: 101,
  },
  x8cart_x79_x1000534392610i11100f128d8f8: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    width: 68,
    height: 68,
    left: 0,
    top: 0,
  },
  x8cart_x79_ufca0740eb8: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
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
    width: 203,
    height: 17,
    left: 82,
    top: 12,
  },
  x8cart_x79_x59000877f0f29: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(110, 110, 110, 1)',
    fontSize: 16,
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
    width: 70,
    height: 17,
    left: 82,
    top: 36,
  },
  x8cart_x79_x78c05b5ccc: {
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
    width: 33,
    height: 33,
    left: 300,
    top: 18,
  },
  x8cart_x79_x78c05b5ccc_x1717ebc083: {
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
    width: 33,
    height: 33,
    left: 0,
    top: 0,
  },
  x8cart_x79_x78c05b5ccc_cancel393f3754: {
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
    width: 12.8,
    height: 12.8,
    left: 10,
    top: 10,
  },
  x8cart_x79_x78c05b5ccc_cancel393f3754_x26e2021462: {
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
    width: 12.8,
    height: 12.8,
    left: 0,
    top: 0,
  },
  x8cart_x80: {
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
    width: 333,
    height: 68,
    left: 27,
    top: 181,
  },
  x8cart_x80_x1000534392610i11100baf8aa8c: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    width: 68,
    height: 68,
    left: 0,
    top: 0,
  },
  x8cart_x80_ufc91cc88ff: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
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
    width: 203,
    height: 17,
    left: 82,
    top: 12,
  },
  x8cart_x80_x590003fd79c7a: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(110, 110, 110, 1)',
    fontSize: 16,
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
    width: 70,
    height: 17,
    left: 82,
    top: 36,
  },
  x8cart_x80_x78b8fdb83a: {
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
    width: 33,
    height: 33,
    left: 300,
    top: 18,
  },
  x8cart_x80_x78b8fdb83a_x17aaec7830: {
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
    width: 33,
    height: 33,
    left: 0,
    top: 0,
  },
  x8cart_x80_x78b8fdb83a_cancel7a9be608: {
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
    width: 12.8,
    height: 12.8,
    left: 10,
    top: 10,
  },
  x8cart_x80_x78b8fdb83a_cancel7a9be608_x265008984e: {
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
    width: 12.8,
    height: 12.8,
    left: 0,
    top: 0,
  },
  x8cart_x81: {
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
    width: 333,
    height: 68,
    left: 27,
    top: 261,
  },
  x8cart_x81_x1000534392610i11100086a6fc5: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    width: 68,
    height: 68,
    left: 0,
    top: 0,
  },
  x8cart_x81_ufc0eb6e6cb: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
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
    width: 203,
    height: 17,
    left: 82,
    top: 12,
  },
  x8cart_x81_x59000e442e091: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(110, 110, 110, 1)',
    fontSize: 16,
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
    width: 70,
    height: 17,
    left: 82,
    top: 36,
  },
  x8cart_x81_x78dfc8ca4c: {
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
    width: 33,
    height: 33,
    left: 300,
    top: 18,
  },
  x8cart_x81_x78dfc8ca4c_x17619d9216: {
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
    width: 33,
    height: 33,
    left: 0,
    top: 0,
  },
  x8cart_x81_x78dfc8ca4c_cancel1d3d1374: {
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
    width: 12.8,
    height: 12.8,
    left: 10,
    top: 10,
  },
  x8cart_x81_x78dfc8ca4c_cancel1d3d1374_x2684e0d01d: {
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
    width: 12.8,
    height: 12.8,
    left: 0,
    top: 0,
  },
  x8cart_x82: {
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
    width: 333,
    height: 68,
    left: 27,
    top: 341,
  },
  x8cart_x82_x1000534392610i11100c8a61491: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    width: 68,
    height: 68,
    left: 0,
    top: 0,
  },
  x8cart_x82_ufc6ccd4005: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
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
    width: 203,
    height: 17,
    left: 82,
    top: 12,
  },
  x8cart_x82_x590007c1aab09: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(110, 110, 110, 1)',
    fontSize: 16,
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
    width: 70,
    height: 17,
    left: 82,
    top: 36,
  },
  x8cart_x82_x78e77dc86f: {
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
    width: 33,
    height: 33,
    left: 300,
    top: 18,
  },
  x8cart_x82_x78e77dc86f_x17ad6eed4e: {
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
    width: 33,
    height: 33,
    left: 0,
    top: 0,
  },
  x8cart_x82_x78e77dc86f_cancel2941184e: {
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
    width: 12.8,
    height: 12.8,
    left: 10,
    top: 10,
  },
  x8cart_x82_x78e77dc86f_cancel2941184e_x264485672a: {
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
    width: 12.8,
    height: 12.8,
    left: 0,
    top: 0,
  },
  x8cart_x83: {
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
    width: 333,
    height: 68,
    left: 27,
    top: 422,
  },
  x8cart_x83_x1000534392610i11100f588e013: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    width: 68,
    height: 68,
    left: 0,
    top: 0,
  },
  x8cart_x83_ufc64e60633: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
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
    width: 203,
    height: 17,
    left: 82,
    top: 12,
  },
  x8cart_x83_x59000a9c1d592: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(110, 110, 110, 1)',
    fontSize: 16,
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
    width: 70,
    height: 17,
    left: 82,
    top: 36,
  },
  x8cart_x83_x786115cd2e: {
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
    width: 33,
    height: 33,
    left: 300,
    top: 18,
  },
  x8cart_x83_x786115cd2e_x170eb4c32c: {
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
    width: 33,
    height: 33,
    left: 0,
    top: 0,
  },
  x8cart_x83_x786115cd2e_cancel54edb211: {
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
    width: 12.8,
    height: 12.8,
    left: 10,
    top: 10,
  },
  x8cart_x83_x786115cd2e_cancel54edb211_x26542b0814: {
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
    width: 12.8,
    height: 12.8,
    left: 0,
    top: 0,
  },
  x8cart_x1000534392610i11100: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    width: 68,
    height: 68,
    left: 27,
    top: 502,
  },
  x8cart_ufc: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
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
    width: 203,
    height: 17,
    left: 109,
    top: 514,
  },
  x8cart_x59000: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(110, 110, 110, 1)',
    fontSize: 16,
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
    width: 70,
    height: 17,
    left: 109,
    top: 538,
  },
  x8cart_x78: {
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
    width: 33,
    height: 33,
    left: 327,
    top: 520,
  },
  x8cart_x78_x17: {
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
    width: 33,
    height: 33,
    left: 0,
    top: 0,
  },
  x8cart_x78_cancel: {
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
    width: 12.8,
    height: 12.8,
    left: 10,
    top: 10,
  },
  x8cart_x78_cancel_x26: {
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
    width: 12.8,
    height: 12.8,
    left: 0,
    top: 0,
  },
  x8cart_x320000: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 25,
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
    width: 207,
    height: 28,
    left: 27,
    top: 624,
  },
  x2home_x50: {
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
    width: 361,
    height: 77,
    left: 16,
    top: 696, // original 766
  },
  x2home_x50_x121b19d503: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(42, 37, 38, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    borderBottomLeftRadius: 39,
    borderBottomRightRadius: 39,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.47843137254901963,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 361,
    height: 77,
    left: 0,
    top: 0,
  },
  x2home_x50_x19: {
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
    width: 270.12,
    height: 32,
    left: 45,
    top: 22,
  },
  x2home_x50_x19_x18: {
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
    width: 45,
    height: 32,
    left: 0,
    top: 0,
  },
  x2home_x50_x19_x18_x10: {
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
    width: 8,
    height: 8,
    left: 19,
    top: 0,
  },
  x2home_x50_x19_x18_home: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
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
    width: 45,
    height: 16,
    left: 0,
    top: 16,
  },
  x2home_x50_x19_tag: {
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
    width: 27.24,
    height: 27.24,
    left: 92.88,
    top: 4.76,
  },
  x2home_x50_x19_tag_x3: {
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
    width: 6.02,
    height: 6.02,
    left: 4.01,
    top: 4.01,
  },
  x2home_x50_x19_tag_x4: {
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
    width: 27.24,
    height: 27.24,
    left: 0,
    top: 0,
  },
  x2home_x50_x19_cart: {
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
    width: 27.12,
    height: 27.12,
    left: 168,
    top: 4.88,
  },
  x2home_x50_x19_personCircle2: {
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
    width: 27.12,
    height: 27.12,
    left: 243,
    top: 4.88,
  },
  x2home_x50_x19_personCircle2_x5f0b3bb45: {
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
    width: 10.17,
    height: 10.17,
    left: 8.48,
    top: 5.09,
  },
  x2home_x50_x19_personCircle2_x6: {
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
    width: 27.12,
    height: 27.12,
    left: 0,
    top: 0,
  },
})
