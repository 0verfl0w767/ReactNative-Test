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

export default class X7random extends Component {
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
          data-layer="9b8dc919-701f-434e-a169-0249e2842f07"
          contentContainerStyle={styles.x7random}>
          <View
            data-layer="367c2e32-0dc9-4d34-95ec-688156d0b9f3"
            style={styles.x7random_x15}>
            <View
              data-layer="12877e8d-6ca5-47ec-9f35-5fe8a3699017"
              style={styles.x7random_x15_x6734a5e3c}></View>
            <View
              data-layer="c66b533e-829a-48a5-bbec-e5397d0258e4"
              style={styles.x7random_x15_x7}></View>
            <Text
              data-layer="62877088-f609-4998-addf-dae6de17040c"
              style={styles.x7random_x15_x9517f9c2}>
              트렌드
            </Text>
            <Text
              data-layer="2bab555c-87ae-4f49-88bf-83ece7831f9d"
              style={styles.x7random_x15_xfb631135}>
              브랜드
            </Text>
          </View>
          <View
            data-layer="6b79ae91-bea0-4055-945c-fb122f83bdd8"
            style={styles.x7random_x10cdbada92}></View>
          <View
            data-layer="5e9789c8-4bc6-4cc9-b05e-c95cde224550"
            style={styles.x7random_x14}>
            <View
              data-layer="491a6450-1102-417a-8b20-629971f7aa91"
              style={styles.x7random_x14_x11}>
              <View
                data-layer="5f3eb6d1-1ca3-4c5a-a16e-dca40e32f61c"
                style={styles.x7random_x14_x11_x9a93c62cc}></View>
              <View
                data-layer="a4367637-25ce-4b24-a0b6-8ef1ab272f30"
                style={styles.x7random_x14_x11_x86b75ac88}></View>
              <ReactImage
                data-layer="de888d4f-d97b-4e75-b0d4-01edaf66ce95"
                source={require('./assets/x33820382511827843024344491950867172506008338n5e241e8b.png')}
                style={
                  styles.x7random_x14_x11_x33820382511827843024344491950867172506008338n5e241e8b
                }
              />
              <Svg
                data-layer="d827ddad-d8fd-456c-9c04-5c2b5e1e9096"
                style={styles.x7random_x14_x11_x8c4befbff}
                preserveAspectRatio="none"
                viewBox="0 0 36 36"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 18 0 C 27.94112396240234 0 36 8.05887508392334 36 18 C 36 27.94112396240234 27.94112396240234 36 18 36 C 8.05887508392334 36 0 27.94112396240234 0 18 C 0 8.05887508392334 8.05887508392334 0 18 0 Z" />
              </Svg>
              <Svg
                data-layer="ad4553c1-04d1-4d17-89b5-27938841cb1b"
                style={styles.x7random_x14_x11_heartFill7002f3a0}
                preserveAspectRatio="none"
                viewBox="0.000217437744140625 -0.00005137920379638672 15.99951171875 15"
                fill="rgba(255, 255, 255, 1)">
                <SvgPath d="M 8 1.314000010490417 C 12.4379997253418 -3.247999906539917 23.53400039672852 4.735000133514404 8 15 C -7.533999919891357 4.736000061035156 3.562000036239624 -3.247999906539917 8 1.314000010490417 Z" />
              </Svg>
              <ReactImage
                data-layer="55d5627b-0d6d-48aa-84f2-792a46e0399d"
                source={require('./assets/x33717913116430039928046652529635818548328565ne5e97944.png')}
                style={
                  styles.x7random_x14_x11_x33717913116430039928046652529635818548328565ne5e97944
                }
              />
              <Svg
                data-layer="93cbe83c-e63f-44cc-9b8e-1331f9627926"
                style={styles.x7random_x14_x11_x933f48a8c}
                preserveAspectRatio="none"
                viewBox="0 0 36 36"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 18 0 C 27.94112396240234 0 36 8.05887508392334 36 18 C 36 27.94112396240234 27.94112396240234 36 18 36 C 8.05887508392334 36 0 27.94112396240234 0 18 C 0 8.05887508392334 8.05887508392334 0 18 0 Z" />
              </Svg>
              <Svg
                data-layer="330898a1-d611-4e05-80fd-36fa482b60be"
                style={styles.x7random_x14_x11_heartea4e53f0}
                preserveAspectRatio="none"
                viewBox="0.00010442733764648438 -0.000049114227294921875 15.99951171875 15"
                fill="rgba(255, 255, 255, 1)">
                <SvgPath d="M 8 2.747999906539917 L 7.282999992370605 2.010999917984009 C 5.599999904632568 0.2809999883174896 2.513999938964844 0.878000020980835 1.399999976158142 3.052999973297119 C 0.8769999742507935 4.076000213623047 0.7590000033378601 5.552999973297119 1.71399998664856 7.438000202178955 C 2.634000062942505 9.253000259399414 4.548000335693359 11.42700004577637 8 13.79500007629395 C 11.45199966430664 11.42700004577637 13.36499977111816 9.253000259399414 14.2859992980957 7.438000202178955 C 15.24099922180176 5.552000045776367 15.12399959564209 4.076000213623047 14.59999942779541 3.052999973297119 C 13.48600006103516 0.878000020980835 10.39999961853027 0.2800000011920929 8.717000007629395 2.009999990463257 L 8 2.747999906539917 Z M 8 15 C -7.333000183105469 4.868000030517578 3.279000043869019 -3.039999961853027 7.823999881744385 1.14300000667572 C 7.883999824523926 1.197999954223633 7.942999839782715 1.254999995231628 8 1.314000010490417 C 8.056421279907227 1.255053281784058 8.115132331848145 1.198342561721802 8.175999641418457 1.143999338150024 C 12.72000026702881 -3.04200005531311 23.33300018310547 4.867000102996826 8 15 Z" />
              </Svg>
              <Text
                data-layer="6c8015a8-2684-412f-9a48-e38f920f5fba"
                style={styles.x7random_x14_x11_ufcb8b77c50}>
                UFC 화이트 후드..
              </Text>
              <Text
                data-layer="525df9ee-4a06-41d2-867a-e80b1f27e33f"
                style={styles.x7random_x14_x11_x74000c526d98a}>
                74,000원
              </Text>
              <View
                data-layer="e76b353e-3b08-4000-9469-9aacc6eca0b7"
                style={styles.x7random_x14_x11_x8e48f538f}>
                <Text
                  data-layer="bdfc853c-8472-46d7-ab1e-46c95edd3b97"
                  style={styles.x7random_x14_x11_x8e48f538f_x4550579b551c}>
                  4.5/5.0
                </Text>
                <Svg
                  data-layer="87f0bad9-777a-4df3-83e5-6ce4e14379ce"
                  style={styles.x7random_x14_x11_x8e48f538f_starFill184602979}
                  preserveAspectRatio="none"
                  viewBox="0.0013465508818626404 0.499500036239624 9 8.437744140625"
                  fill="rgba(255, 206, 12, 1)">
                  <SvgPath d="M 2.032333135604858 8.905193328857422 C 1.815208673477173 9.016567230224609 1.56883430480957 8.821380615234375 1.612709164619446 8.57219409942627 L 2.079582929611206 5.911577224731445 L 0.09790132939815521 4.02383279800415 C -0.08716059476137161 3.847208261489868 0.009026596322655678 3.52433443069458 0.2570883333683014 3.489459753036499 L 3.012204885482788 3.097960710525513 L 4.240700721740723 0.6640307307243347 C 4.351513385772705 0.4446564614772797 4.651324272155762 0.4446564614772797 4.762136459350586 0.6640307307243347 L 5.990633010864258 3.097960710525513 L 8.745750427246094 3.489459753036499 C 8.99381160736084 3.52433443069458 9.089999198913574 3.847208499908447 8.904374122619629 4.02383279800415 L 6.92325496673584 5.911577224731445 L 7.390128135681152 8.57219409942627 C 7.434003353118896 8.821380615234375 7.187629222869873 9.016567230224609 6.970504283905029 8.905193328857422 L 4.500575065612793 7.636197566986084 L 2.031770467758179 8.905193328857422 Z" />
                </Svg>
              </View>
              <Text
                data-layer="2ef58fdc-5991-40c3-baaa-3217d3ad8f77"
                style={styles.x7random_x14_x11_x0f769f96}>
                후디 바람막이 점..
              </Text>
              <Text
                data-layer="57812c5e-576d-4f78-adfb-d70206e113c0"
                style={styles.x7random_x14_x11_x74000c5969a2a}>
                74,000원
              </Text>
              <View
                data-layer="150be6ff-3332-4d5d-b6e0-4a4358ff9352"
                style={styles.x7random_x14_x11_x92fc85971}>
                <Text
                  data-layer="d1c8ce4d-00d8-474c-a14c-fadc8cf5b69d"
                  style={styles.x7random_x14_x11_x92fc85971_x455039ac592e}>
                  4.5/5.0
                </Text>
                <Svg
                  data-layer="d65a6473-e8a7-454f-ad63-ac74c2ae7b16"
                  style={styles.x7random_x14_x11_x92fc85971_starFill11fe6baf1}
                  preserveAspectRatio="none"
                  viewBox="0.0013465508818626404 0.499500036239624 9 8.437744140625"
                  fill="rgba(255, 206, 12, 1)">
                  <SvgPath d="M 2.032333135604858 8.905193328857422 C 1.815208673477173 9.016567230224609 1.56883430480957 8.821380615234375 1.612709164619446 8.57219409942627 L 2.079582929611206 5.911577224731445 L 0.09790132939815521 4.02383279800415 C -0.08716059476137161 3.847208261489868 0.009026596322655678 3.52433443069458 0.2570883333683014 3.489459753036499 L 3.012204885482788 3.097960710525513 L 4.240700721740723 0.6640307307243347 C 4.351513385772705 0.4446564614772797 4.651324272155762 0.4446564614772797 4.762136459350586 0.6640307307243347 L 5.990633010864258 3.097960710525513 L 8.745750427246094 3.489459753036499 C 8.99381160736084 3.52433443069458 9.089999198913574 3.847208499908447 8.904374122619629 4.02383279800415 L 6.92325496673584 5.911577224731445 L 7.390128135681152 8.57219409942627 C 7.434003353118896 8.821380615234375 7.187629222869873 9.016567230224609 6.970504283905029 8.905193328857422 L 4.500575065612793 7.636197566986084 L 2.031770467758179 8.905193328857422 Z" />
                </Svg>
              </View>
            </View>
            <View
              data-layer="236aa432-13da-46f3-9efd-33a378697171"
              style={styles.x7random_x14_x13f4ab6bf4}>
              <View
                data-layer="dd2bea86-810d-4a1f-84f1-c6e181ef9da9"
                style={styles.x7random_x14_x13f4ab6bf4_x905840ccd}></View>
              <ReactImage
                data-layer="83cccc9b-38e4-45f4-b733-6ef53eb5eb22"
                source={require('./assets/x33717913116430039928046652529635818548328565n.png')}
                style={
                  styles.x7random_x14_x13f4ab6bf4_x33717913116430039928046652529635818548328565n
                }
              />
              <Svg
                data-layer="baba90e3-e1fe-4c59-af83-ceba43c02a2e"
                style={styles.x7random_x14_x13f4ab6bf4_x9bdbf2025}
                preserveAspectRatio="none"
                viewBox="0 0 36 36"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 18 0 C 27.94112396240234 0 36 8.05887508392334 36 18 C 36 27.94112396240234 27.94112396240234 36 18 36 C 8.05887508392334 36 0 27.94112396240234 0 18 C 0 8.05887508392334 8.05887508392334 0 18 0 Z" />
              </Svg>
              <Svg
                data-layer="b18a15c8-8943-4bbd-8d16-8ce2c1952e77"
                style={styles.x7random_x14_x13f4ab6bf4_heart}
                preserveAspectRatio="none"
                viewBox="0.00010442733764648438 -0.000049114227294921875 15.99951171875 15"
                fill="rgba(255, 255, 255, 1)">
                <SvgPath d="M 8 2.747999906539917 L 7.282999992370605 2.010999917984009 C 5.599999904632568 0.2809999883174896 2.513999938964844 0.878000020980835 1.399999976158142 3.052999973297119 C 0.8769999742507935 4.076000213623047 0.7590000033378601 5.552999973297119 1.71399998664856 7.438000202178955 C 2.634000062942505 9.253000259399414 4.548000335693359 11.42700004577637 8 13.79500007629395 C 11.45199966430664 11.42700004577637 13.36499977111816 9.253000259399414 14.2859992980957 7.438000202178955 C 15.24099922180176 5.552000045776367 15.12399959564209 4.076000213623047 14.59999942779541 3.052999973297119 C 13.48600006103516 0.878000020980835 10.39999961853027 0.2800000011920929 8.717000007629395 2.009999990463257 L 8 2.747999906539917 Z M 8 15 C -7.333000183105469 4.868000030517578 3.279000043869019 -3.039999961853027 7.823999881744385 1.14300000667572 C 7.883999824523926 1.197999954223633 7.942999839782715 1.254999995231628 8 1.314000010490417 C 8.056421279907227 1.255053281784058 8.115132331848145 1.198342561721802 8.175999641418457 1.143999338150024 C 12.72000026702881 -3.04200005531311 23.33300018310547 4.867000102996826 8 15 Z" />
              </Svg>
              <Text
                data-layer="201dd755-df01-413f-b164-768ac9eaceda"
                style={styles.x7random_x14_x13f4ab6bf4_ufc}>
                UFC 화이트 후드..
              </Text>
              <Text
                data-layer="a7346f6e-ceb6-4710-b6cb-ac42ab3257c8"
                style={styles.x7random_x14_x13f4ab6bf4_x74000827c4c63}>
                74,000원
              </Text>
              <View
                data-layer="fb6283ba-217e-44d4-9c69-9f22e6b3dbcc"
                style={styles.x7random_x14_x13f4ab6bf4_x81268a76a}>
                <Text
                  data-layer="8d17cf9b-98e6-4d7d-bc27-1c718058985a"
                  style={
                    styles.x7random_x14_x13f4ab6bf4_x81268a76a_x45509e425da3
                  }>
                  4.5/5.0
                </Text>
                <Svg
                  data-layer="a98bf79d-751a-4e6c-8420-2761fa9df6d0"
                  style={
                    styles.x7random_x14_x13f4ab6bf4_x81268a76a_starFill1e505b25e
                  }
                  preserveAspectRatio="none"
                  viewBox="0.0013465508818626404 0.499500036239624 9 8.437744140625"
                  fill="rgba(255, 206, 12, 1)">
                  <SvgPath d="M 2.032333135604858 8.905193328857422 C 1.815208673477173 9.016567230224609 1.56883430480957 8.821380615234375 1.612709164619446 8.57219409942627 L 2.079582929611206 5.911577224731445 L 0.09790132939815521 4.02383279800415 C -0.08716059476137161 3.847208261489868 0.009026596322655678 3.52433443069458 0.2570883333683014 3.489459753036499 L 3.012204885482788 3.097960710525513 L 4.240700721740723 0.6640307307243347 C 4.351513385772705 0.4446564614772797 4.651324272155762 0.4446564614772797 4.762136459350586 0.6640307307243347 L 5.990633010864258 3.097960710525513 L 8.745750427246094 3.489459753036499 C 8.99381160736084 3.52433443069458 9.089999198913574 3.847208499908447 8.904374122619629 4.02383279800415 L 6.92325496673584 5.911577224731445 L 7.390128135681152 8.57219409942627 C 7.434003353118896 8.821380615234375 7.187629222869873 9.016567230224609 6.970504283905029 8.905193328857422 L 4.500575065612793 7.636197566986084 L 2.031770467758179 8.905193328857422 Z" />
                </Svg>
              </View>
            </View>
            <View
              data-layer="b516ff14-3780-4073-8af6-953e374ca4a4"
              style={styles.x7random_x14_x1205af5076}>
              <View
                data-layer="25422694-35db-401e-9460-a24a291a1e42"
                style={styles.x7random_x14_x1205af5076_x8187e8077}></View>
              <ReactImage
                data-layer="9cdb1c26-b920-468c-92a2-e3409004cc76"
                source={require('./assets/x33820382511827843024344491950867172506008338n.png')}
                style={
                  styles.x7random_x14_x1205af5076_x33820382511827843024344491950867172506008338n
                }
              />
              <Svg
                data-layer="9b62d3e5-d90a-46e2-9891-a661d08c5183"
                style={styles.x7random_x14_x1205af5076_x8}
                preserveAspectRatio="none"
                viewBox="0 0 36 36"
                fill="rgba(42, 37, 38, 1)">
                <SvgPath d="M 18 0 C 27.94112396240234 0 36 8.05887508392334 36 18 C 36 27.94112396240234 27.94112396240234 36 18 36 C 8.05887508392334 36 0 27.94112396240234 0 18 C 0 8.05887508392334 8.05887508392334 0 18 0 Z" />
              </Svg>
              <Svg
                data-layer="fde91c17-d860-4809-9e33-869a752125e4"
                style={styles.x7random_x14_x1205af5076_heartFill}
                preserveAspectRatio="none"
                viewBox="0.000217437744140625 -0.00005137920379638672 15.99951171875 15"
                fill="rgba(255, 255, 255, 1)">
                <SvgPath d="M 8 1.314000010490417 C 12.4379997253418 -3.247999906539917 23.53400039672852 4.735000133514404 8 15 C -7.533999919891357 4.736000061035156 3.562000036239624 -3.247999906539917 8 1.314000010490417 Z" />
              </Svg>
              <Text
                data-layer="4dbe2df1-5a48-4bdd-9411-f3692171f8b4"
                style={styles.x7random_x14_x1205af5076_x}>
                후디 바람막이 점..
              </Text>
              <Text
                data-layer="e5b355f6-3e50-46e9-a8e4-88bde684c2be"
                style={styles.x7random_x14_x1205af5076_x74000}>
                74,000원
              </Text>
              <View
                data-layer="dbbe7903-f868-4bda-92ec-f08cfeecd743"
                style={styles.x7random_x14_x1205af5076_x9}>
                <Text
                  data-layer="b061f478-c9eb-46f8-8d5d-cb8a33ce60aa"
                  style={styles.x7random_x14_x1205af5076_x9_x4550}>
                  4.5/5.0
                </Text>
                <Svg
                  data-layer="09a2c790-9b0c-4539-9177-5832f8130ff6"
                  style={styles.x7random_x14_x1205af5076_x9_starFill1}
                  preserveAspectRatio="none"
                  viewBox="0.0013465508818626404 0.499500036239624 9 8.437744140625"
                  fill="rgba(255, 206, 12, 1)">
                  <SvgPath d="M 2.032333135604858 8.905193328857422 C 1.815208673477173 9.016567230224609 1.56883430480957 8.821380615234375 1.612709164619446 8.57219409942627 L 2.079582929611206 5.911577224731445 L 0.09790132939815521 4.02383279800415 C -0.08716059476137161 3.847208261489868 0.009026596322655678 3.52433443069458 0.2570883333683014 3.489459753036499 L 3.012204885482788 3.097960710525513 L 4.240700721740723 0.6640307307243347 C 4.351513385772705 0.4446564614772797 4.651324272155762 0.4446564614772797 4.762136459350586 0.6640307307243347 L 5.990633010864258 3.097960710525513 L 8.745750427246094 3.489459753036499 C 8.99381160736084 3.52433443069458 9.089999198913574 3.847208499908447 8.904374122619629 4.02383279800415 L 6.92325496673584 5.911577224731445 L 7.390128135681152 8.57219409942627 C 7.434003353118896 8.821380615234375 7.187629222869873 9.016567230224609 6.970504283905029 8.905193328857422 L 4.500575065612793 7.636197566986084 L 2.031770467758179 8.905193328857422 Z" />
                </Svg>
              </View>
            </View>
          </View>
          <View
            data-layer="2a538de6-0206-4dbb-8dfa-1514eaa931e6"
            style={styles.x7random_x21}>
            <View
              data-layer="8464920b-0cd9-439d-bc47-28ef946affa2"
              style={styles.x7random_x21_x20}>
              <View
                data-layer="0d690835-e58b-4772-a594-35bcf4e241cd"
                style={styles.x7random_x21_x20_x13}></View>
            </View>
          </View>
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

X7random.propTypes = {}

X7random.defaultProps = {}

const styles = StyleSheet.create({
  x7random: {
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
  x7random_x15: {
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
    width: 346,
    height: 54,
    left: 24,
    top: 27,
  },
  x7random_x15_x6734a5e3c: {
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
  x7random_x15_x7: {
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
    left: 179,
    top: 0,
  },
  x7random_x15_x9517f9c2: {
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
    width: 49,
    height: 20,
    left: 59,
    top: 17,
  },
  x7random_x15_xfb631135: {
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
    width: 49,
    height: 20,
    left: 238,
    top: 17,
  },
  x7random_x10cdbada92: {
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
    left: 381,
    top: 27,
  },
  x7random_x14: {
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
    width: 346,
    height: 615,
    left: 24,
    top: 96,
  },
  x7random_x14_x11: {
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
    width: 346,
    height: 301,
    left: 0,
    top: 0,
  },
  x7random_x14_x11_x9a93c62cc: {
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 167,
    height: 273,
    left: 179,
    top: 0,
  },
  x7random_x14_x11_x86b75ac88: {
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 167,
    height: 301,
    left: 0,
    top: 0,
  },
  x7random_x14_x11_x33820382511827843024344491950867172506008338n5e241e8b: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 167,
    height: 209,
    left: 0,
    top: 0,
  },
  x7random_x14_x11_x8c4befbff: {
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
    width: 36,
    height: 36,
    left: 126,
    top: 9,
  },
  x7random_x14_x11_heartFill7002f3a0: {
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
    width: 16,
    height: 15,
    left: 136,
    top: 20,
  },
  x7random_x14_x11_x33717913116430039928046652529635818548328565ne5e97944: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 167,
    height: 182,
    left: 179,
    top: 0,
  },
  x7random_x14_x11_x933f48a8c: {
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
    width: 36,
    height: 36,
    left: 305,
    top: 9,
  },
  x7random_x14_x11_heartea4e53f0: {
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
    width: 16,
    height: 15,
    left: 315,
    top: 20,
  },
  x7random_x14_x11_ufcb8b77c50: {
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
    width: 143,
    height: 20,
    left: 191,
    top: 199,
  },
  x7random_x14_x11_x74000c526d98a: {
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
    width: 77,
    height: 20,
    left: 191,
    top: 232,
  },
  x7random_x14_x11_x8e48f538f: {
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
    width: 49,
    height: 10,
    left: 285,
    top: 242,
  },
  x7random_x14_x11_x8e48f538f_x4550579b551c: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(112, 112, 112, 1)',
    fontSize: 10,
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
    width: 37,
    height: 10,
    left: 0,
    top: 0,
  },
  x7random_x14_x11_x8e48f538f_starFill184602979: {
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
    width: 9,
    height: 8.44,
    left: 40,
    top: 0.28,
  },
  x7random_x14_x11_x0f769f96: {
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
    width: 137,
    height: 20,
    left: 12,
    top: 225,
  },
  x7random_x14_x11_x74000c5969a2a: {
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
    width: 77,
    height: 20,
    left: 12,
    top: 261,
  },
  x7random_x14_x11_x92fc85971: {
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
    width: 49,
    height: 10,
    left: 106,
    top: 271,
  },
  x7random_x14_x11_x92fc85971_x455039ac592e: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(112, 112, 112, 1)',
    fontSize: 10,
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
    width: 37,
    height: 10,
    left: 0,
    top: 0,
  },
  x7random_x14_x11_x92fc85971_starFill11fe6baf1: {
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
    width: 9,
    height: 8.44,
    left: 40,
    top: 0.28,
  },
  x7random_x14_x13f4ab6bf4: {
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
    height: 273,
    left: 179,
    top: 286,
  },
  x7random_x14_x13f4ab6bf4_x905840ccd: {
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 167,
    height: 273,
    left: 0,
    top: 0,
  },
  x7random_x14_x13f4ab6bf4_x33717913116430039928046652529635818548328565n: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 167,
    height: 182,
    left: 0,
    top: 0,
  },
  x7random_x14_x13f4ab6bf4_x9bdbf2025: {
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
    width: 36,
    height: 36,
    left: 126,
    top: 9,
  },
  x7random_x14_x13f4ab6bf4_heart: {
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
    width: 16,
    height: 15,
    left: 136,
    top: 20,
  },
  x7random_x14_x13f4ab6bf4_ufc: {
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
    width: 143,
    height: 20,
    left: 12,
    top: 199,
  },
  x7random_x14_x13f4ab6bf4_x74000827c4c63: {
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
    width: 77,
    height: 20,
    left: 12,
    top: 232,
  },
  x7random_x14_x13f4ab6bf4_x81268a76a: {
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
    width: 49,
    height: 10,
    left: 106,
    top: 242,
  },
  x7random_x14_x13f4ab6bf4_x81268a76a_x45509e425da3: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(112, 112, 112, 1)',
    fontSize: 10,
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
    width: 37,
    height: 10,
    left: 0,
    top: 0,
  },
  x7random_x14_x13f4ab6bf4_x81268a76a_starFill1e505b25e: {
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
    width: 9,
    height: 8.44,
    left: 40,
    top: 0.28,
  },
  x7random_x14_x1205af5076: {
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
    height: 301,
    left: 0,
    top: 314,
  },
  x7random_x14_x1205af5076_x8187e8077: {
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 167,
    height: 301,
    left: 0,
    top: 0,
  },
  x7random_x14_x1205af5076_x33820382511827843024344491950867172506008338n: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 167,
    height: 209,
    left: 0,
    top: 0,
  },
  x7random_x14_x1205af5076_x8: {
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
    width: 36,
    height: 36,
    left: 126,
    top: 9,
  },
  x7random_x14_x1205af5076_heartFill: {
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
    width: 16,
    height: 15,
    left: 136,
    top: 20,
  },
  x7random_x14_x1205af5076_x: {
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
    width: 137,
    height: 20,
    left: 12,
    top: 225,
  },
  x7random_x14_x1205af5076_x74000: {
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
    width: 77,
    height: 20,
    left: 12,
    top: 261,
  },
  x7random_x14_x1205af5076_x9: {
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
    width: 49,
    height: 10,
    left: 106,
    top: 271,
  },
  x7random_x14_x1205af5076_x9_x4550: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(112, 112, 112, 1)',
    fontSize: 10,
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
    width: 37,
    height: 10,
    left: 0,
    top: 0,
  },
  x7random_x14_x1205af5076_x9_starFill1: {
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
    width: 9,
    height: 8.44,
    left: 40,
    top: 0.28,
  },
  x7random_x21: {
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
  x7random_x21_x20: {
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
  x7random_x21_x20_x13: {
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
  x7random_x22: {
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
  x7random_x22_x12: {
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
  x7random_x22_cart: {
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
    left: 213,
    top: 26.88,
  },
  x7random_x22_personCircle2: {
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
    left: 288,
    top: 26.88,
  },
  x7random_x22_personCircle2_x5: {
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
  x7random_x22_personCircle2_x6: {
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
  x7random_x22_x75: {
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
    left: 132,
    top: 22,
  },
  x7random_x22_x75_x10: {
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
  x7random_x22_x75_expl: {
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
  x7random_home: {
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
  x7random_home_x25: {
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
