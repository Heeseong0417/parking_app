import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const List_item = () => {
  return (
    <View style={styles.homeView1}>
      <View style={styles.homeView}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../../assets/vector.png")}
        />
        <View style={styles.groupView2}>
          <Image
            style={styles.homeBackgroundMaskIcon}
            resizeMode="cover"
            source={require("../../assets/home-backgroundmask.png")}
          />
          <View style={styles.maskGroup18}>
            <Image
              style={styles.bgIcon}
              resizeMode="cover"
              source={require("../../assets/bg.png")}
            />
            <View style={styles.groupView}>
              <View style={styles.learningPlanView}>
                <Image
                  style={styles.bgIcon1}
                  resizeMode="cover"
                  source={require("../../assets/bg1.png")}
                />
                <View style={styles.textView}>
                  <Text style={styles.moreText}>more</Text>
                </View>
                <View style={styles.progressView}>
                  <Image
                    style={styles.progressIcon}
                    resizeMode="cover"
                    source={require("../../assets/progress.png")}
                  />
                  <Text style={styles.text}>주민 차량</Text>
                  <Text style={styles.text3}>
                    <Text style={styles.text1}>40</Text>
                    <Text style={styles.text2}>/48</Text>
                  </Text>
                  <Text style={styles.text6}>
                    <Text style={styles.text4}>40</Text>
                    <Text style={styles.text5}>/48</Text>
                  </Text>
                  <Text style={styles.text9}>
                    <Text style={styles.text7}>40</Text>
                    <Text style={styles.text8}>/48</Text>
                  </Text>
                </View>
                <View style={styles.progressView1}>
                  <Image
                    style={styles.progressIcon1}
                    resizeMode="cover"
                    source={require("../../assets/progress.png")}
                  />
                  <Text style={styles.text10}>통학 차량</Text>
                </View>
                <View style={styles.progressView2}>
                  <Image
                    style={styles.progressIcon2}
                    resizeMode="cover"
                    source={require("../../assets/progress.png")}
                  />
                  <Text style={styles.text11}>택시 차량</Text>
                  <Text style={styles.text14}>
                    <Text style={styles.text12}>40</Text>
                    <Text style={styles.text13}>/48</Text>
                  </Text>
                </View>
                <View style={styles.progressView3}>
                  <Image
                    style={styles.progressIcon3}
                    resizeMode="cover"
                    source={require("../../assets/progress.png")}
                  />
                  <Text style={styles.text15}>배달 차량</Text>
                  <Text style={styles.text18}>
                    <Text style={styles.text16}>40</Text>
                    <Text style={styles.text17}>/48</Text>
                  </Text>
                  <Text style={styles.text19}>현재/예측</Text>
                </View>
                <View style={styles.progressView4}>
                  <Image
                    style={styles.progressIcon4}
                    resizeMode="cover"
                    source={require("../../assets/progress4.png")}
                  />
                  <Text style={styles.text20}>택배 차량</Text>
                </View>
                <View style={styles.titleView}>
                  <Image
                    style={styles.titleBackgroundIcon}
                    resizeMode="cover"
                    source={require("../../assets/title-background.png")}
                  />
                  <Image
                    style={styles.rectangleIcon}
                    resizeMode="cover"
                    source={require("../../assets/title-background.png")}
                  />
                  <Text style={styles.text21}>현재 아파트 내 통행량</Text>
                </View>
              </View>
            </View>
            <View style={styles.learnedTodayView}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../../assets/group.png")}
              />
              <Text style={styles.text22}>실시간 교통위험도</Text>
              <Text style={styles.moreStatsText}>More stats</Text>
              <View style={styles.groupView1}>
                <Text style={styles.text23}>65%</Text>
              </View>
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../../assets/rectangle-30.png")}
              />
              <Image
                style={styles.rectangleIcon2}
                resizeMode="cover"
                source={require("../../assets/rectangle-301.png")}
              />
            </View>
            <View style={styles.titleView1}>
              <Text style={styles.hiUserText}>Hi, User</Text>
              <Text style={styles.withDataMakesAPTSafeAgai}>
                With Data, Makes APT safe again
              </Text>
            </View>
            <Image
              style={styles.statusIcon}
              resizeMode="cover"
              source={require("../../assets/status.png")}
            />
            <Image
              style={styles.avatarIcon}
              resizeMode="cover"
              source={require("../../assets/avatar.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.messageSend}>
        <View style={styles.frameView}>
          <Text style={styles.loremIpsumDolorSitAmetCo}>
            평소보다 택배차량이 많은 시간대입니다. 외출시 조심하세요.
          </Text>
        </View>
        <Image
          style={styles.tipIcon}
          resizeMode="cover"
          source={require("../../assets/tip.png")}
        />
      </View>
      <Image
        style={styles.userIdCard}
        resizeMode="cover"
        source={require("../../assets/user--id-card.png")}
      />
      <View style={styles.footerView1}>
        <View style={styles.footerView}>
          <View style={styles.footerhomeView}>
            <Image
              style={styles.footerhomeBackgroundIcon}
              resizeMode="cover"
              source={require("../../assets/footerhome-background.png")}
            />
            <Image
              style={styles.unionIcon}
              resizeMode="cover"
              source={require("../../assets/union.png")}
            />
            <Image
              style={styles.unionIcon1}
              resizeMode="cover"
              source={require("../../assets/union1.png")}
            />
            <View style={styles.carLogView}>
              <Text style={styles.safetyText}>Safety</Text>
            </View>
            <View style={styles.footeronView}>
              <Image
                style={styles.footeronBackgroundIcon}
                resizeMode="cover"
                source={require("../../assets/footeron-background.png")}
              />
              <Image
                style={styles.rectangleIcon3}
                resizeMode="cover"
                source={require("../../assets/rectangle-19.png")}
              />
              <Text style={styles.homeText}>Home</Text>
              <Image
                style={styles.iconfooterhomeon}
                resizeMode="cover"
                source={require("../../assets/iconfooterhomeon.png")}
              />
            </View>
            <View style={styles.footeroffView}>
              <Image
                style={styles.footeroffBackgroundIcon}
                resizeMode="cover"
                source={require("../../assets/footeroff-background.png")}
              />
              <Text style={styles.trafficText}>Traffic</Text>
            </View>
            <View style={styles.footeroffView1}>
              <Image
                style={styles.footeroffBackgroundIcon1}
                resizeMode="cover"
                source={require("../../assets/footeroff-background.png")}
              />
              <Text style={styles.carLogText}>Car log</Text>
            </View>
            <View style={styles.footeroffView2}>
              <Image
                style={styles.footeroffBackgroundIcon2}
                resizeMode="cover"
                source={require("../../assets/footeroff-background.png")}
              />
              <Text style={styles.accountText}>Account</Text>
              <Image
                style={styles.chartBarChart}
                resizeMode="cover"
                source={require("../../assets/chart--bar-chart.png")}
              />
              <Image
                style={styles.coolicon}
                resizeMode="cover"
                source={require("../../assets/coolicon.png")}
              />
              <Image
                style={styles.iconfooteraccountoff}
                resizeMode="cover"
                source={require("../../assets/iconfooteraccountoff.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../../assets/vector1.png")}
        />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../../assets/vector2.png")}
        />
      </View>
      <View style={styles.groupView3}>
        <View style={styles.footerView3}>
          <View style={styles.footerView2}>
            <View style={styles.footerhomeView1}>
              <Image
                style={styles.footerhomeBackgroundIcon1}
                resizeMode="cover"
                source={require("../../assets/footerhome-background.png")}
              />
              <Image
                style={styles.unionIcon2}
                resizeMode="cover"
                source={require("../../assets/union2.png")}
              />
              <Image
                style={styles.unionIcon3}
                resizeMode="cover"
                source={require("../../assets/union3.png")}
              />
              <View style={styles.carLogView1}>
                <Text style={styles.safetyText1}>Safety</Text>
              </View>
              <View style={styles.footeronView1}>
                <Image
                  style={styles.footeronBackgroundIcon1}
                  resizeMode="cover"
                  source={require("../../assets/footeron-background1.png")}
                />
                <Image
                  style={styles.rectangleIcon4}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-19.png")}
                />
                <Text style={styles.homeText1}>Home</Text>
                <Image
                  style={styles.iconfooterhomeon1}
                  resizeMode="cover"
                  source={require("../../assets/iconfooterhomeon1.png")}
                />
              </View>
              <View style={styles.footeroffView3}>
                <Image
                  style={styles.footeroffBackgroundIcon3}
                  resizeMode="cover"
                  source={require("../../assets/footeroff-background.png")}
                />
                <Text style={styles.trafficText1}>Traffic</Text>
              </View>
              <View style={styles.footeroffView4}>
                <Image
                  style={styles.footeroffBackgroundIcon4}
                  resizeMode="cover"
                  source={require("../../assets/footeroff-background.png")}
                />
                <Text style={styles.carLogText1}>Car log</Text>
              </View>
              <View style={styles.footeroffView5}>
                <Image
                  style={styles.footeroffBackgroundIcon5}
                  resizeMode="cover"
                  source={require("../../assets/footeroff-background.png")}
                />
                <Text style={styles.accountText1}>Account</Text>
                <Image
                  style={styles.chartBarChart1}
                  resizeMode="cover"
                  source={require("../../assets/chart--bar-chart.png")}
                />
                <Image
                  style={styles.coolicon1}
                  resizeMode="cover"
                  source={require("../../assets/coolicon.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../../assets/vector1.png")}
          />
          <Image
            style={styles.vectorIcon4}
            resizeMode="cover"
            source={require("../../assets/vector4.png")}
          />
        </View>
        <Image
          style={styles.userIdCard1}
          resizeMode="cover"
          source={require("../../assets/user--id-card.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  homeBackgroundMaskIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  bgIcon: {
    position: "absolute",
    height: "34.83%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "65.17%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  bgIcon1: {
    position: "absolute",
    height: "89.44%",
    width: "94.25%",
    top: "16.05%",
    right: "2.88%",
    bottom: "-5.49%",
    left: "2.88%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  moreText: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#3d5cff",
    textAlign: "left",
  },
  textView: {
    position: "absolute",
    height: "7.5%",
    width: "10.13%",
    top: "90.91%",
    right: "44.7%",
    bottom: "1.59%",
    left: "45.16%",
  },
  progressIcon: {
    position: "absolute",
    height: "20.7%",
    width: "6.7%",
    top: "-0.16%",
    right: "93.68%",
    bottom: "79.45%",
    left: "-0.38%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    position: "absolute",
    height: "21.41%",
    width: "42.23%",
    top: "0%",
    right: "47.54%",
    bottom: "78.59%",
    left: "10.23%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  text1: {
    color: "#fff",
  },
  text2: {
    color: "#b8b8d2",
  },
  text3: {
    position: "absolute",
    height: "21.41%",
    width: "13.86%",
    top: "1.02%",
    right: "0%",
    bottom: "77.57%",
    left: "86.14%",
    fontSize: 14,
    fontFamily: "Poppins",
    textAlign: "left",
  },
  text4: {
    color: "#fff",
  },
  text5: {
    color: "#b8b8d2",
  },
  text6: {
    position: "absolute",
    height: "21.41%",
    width: "13.86%",
    top: "39.44%",
    right: "0%",
    bottom: "39.15%",
    left: "86.14%",
    fontSize: 14,
    fontFamily: "Poppins",
    textAlign: "left",
  },
  text7: {
    color: "#fff",
  },
  text8: {
    color: "#b8b8d2",
  },
  text9: {
    position: "absolute",
    height: "21.41%",
    width: "13.86%",
    top: "78.59%",
    right: "0%",
    bottom: "0%",
    left: "86.14%",
    fontSize: 14,
    fontFamily: "Poppins",
    textAlign: "left",
  },
  progressView: {
    position: "absolute",
    height: "35.04%",
    width: "80.83%",
    top: "26.08%",
    right: "9.55%",
    bottom: "38.88%",
    left: "9.62%",
  },
  progressIcon1: {
    position: "absolute",
    height: "96.71%",
    width: "12.77%",
    top: "-0.73%",
    right: "87.95%",
    bottom: "4.02%",
    left: "-0.72%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text10: {
    position: "absolute",
    height: "100%",
    width: "80.5%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "19.5%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  progressView1: {
    position: "absolute",
    height: "7.5%",
    width: "42.4%",
    top: "54.07%",
    right: "47.98%",
    bottom: "38.43%",
    left: "9.62%",
  },
  progressIcon2: {
    position: "absolute",
    height: "92.12%",
    width: "6.7%",
    top: "-0.69%",
    right: "93.68%",
    bottom: "8.57%",
    left: "-0.38%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text11: {
    position: "absolute",
    height: "95.25%",
    width: "42.23%",
    top: "0%",
    right: "47.54%",
    bottom: "4.75%",
    left: "10.23%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  text12: {
    color: "#fff",
  },
  text13: {
    color: "#b8b8d2",
  },
  text14: {
    position: "absolute",
    height: "95.25%",
    width: "13.86%",
    top: "4.75%",
    right: "0%",
    bottom: "0%",
    left: "86.14%",
    fontSize: 14,
    fontFamily: "Poppins",
    textAlign: "left",
  },
  progressView2: {
    position: "absolute",
    height: "7.88%",
    width: "80.83%",
    top: "66.97%",
    right: "9.55%",
    bottom: "25.16%",
    left: "9.62%",
  },
  progressIcon3: {
    position: "absolute",
    height: "40.86%",
    width: "6.7%",
    top: "-0.31%",
    right: "93.68%",
    bottom: "59.45%",
    left: "-0.38%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text15: {
    position: "absolute",
    height: "42.25%",
    width: "42.23%",
    top: "0%",
    right: "47.54%",
    bottom: "57.75%",
    left: "10.23%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  text16: {
    color: "#fff",
  },
  text17: {
    color: "#b8b8d2",
  },
  text18: {
    position: "absolute",
    height: "42.25%",
    width: "13.86%",
    top: "3.65%",
    right: "0%",
    bottom: "54.1%",
    left: "86.14%",
    fontSize: 14,
    fontFamily: "Poppins",
    textAlign: "left",
  },
  text19: {
    position: "absolute",
    height: "42.25%",
    width: "13.86%",
    top: "57.75%",
    right: "1.52%",
    bottom: "0%",
    left: "84.62%",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  progressView3: {
    position: "absolute",
    height: "17.76%",
    width: "80.83%",
    top: "80.42%",
    right: "9.55%",
    bottom: "1.83%",
    left: "9.62%",
  },
  progressIcon4: {
    position: "absolute",
    height: "96.69%",
    width: "14.71%",
    top: "-0.73%",
    right: "86.12%",
    bottom: "4.04%",
    left: "-0.83%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text20: {
    position: "absolute",
    height: "100%",
    width: "77.54%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "22.46%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  progressView4: {
    position: "absolute",
    height: "7.5%",
    width: "36.8%",
    top: "40.01%",
    right: "53.58%",
    bottom: "52.49%",
    left: "9.62%",
  },
  titleBackgroundIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "511.52%",
    right: "0%",
    bottom: "-511.52%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "511.52%",
    right: "0%",
    bottom: "-511.52%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text21: {
    position: "absolute",
    height: "57.62%",
    width: "35.84%",
    top: "32.63%",
    right: "58.84%",
    bottom: "9.75%",
    left: "5.32%",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    height: "17.15%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "82.85%",
    left: "0%",
  },
  learningPlanView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  groupView: {
    position: "absolute",
    height: "53.27%",
    width: "100%",
    top: "46.73%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  groupIcon: {
    position: "absolute",
    height: "119.21%",
    width: "105.5%",
    top: "-3.2%",
    right: "-2.75%",
    bottom: "-16%",
    left: "-2.75%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text22: {
    position: "absolute",
    height: "18.75%",
    width: "25.97%",
    top: "20.83%",
    right: "69.25%",
    bottom: "60.42%",
    left: "4.78%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#1f1f39",
    textAlign: "left",
  },
  moreStatsText: {
    position: "absolute",
    height: "18.75%",
    width: "20.3%",
    top: "20.83%",
    right: "4.29%",
    bottom: "60.42%",
    left: "75.41%",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1f1f39",
    textAlign: "left",
  },
  text23: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#1f1f39",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    height: "31.25%",
    width: "20%",
    top: "41.67%",
    right: "75.22%",
    bottom: "27.08%",
    left: "4.78%",
  },
  rectangleIcon1: {
    position: "absolute",
    height: "6.25%",
    width: "90.45%",
    top: "76.04%",
    right: "4.78%",
    bottom: "17.71%",
    left: "4.78%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleIcon2: {
    position: "absolute",
    height: "6.25%",
    width: "62.69%",
    top: "76.04%",
    right: "32.54%",
    bottom: "17.71%",
    left: "4.78%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  learnedTodayView: {
    position: "absolute",
    height: "18.27%",
    width: "89.33%",
    top: "26.07%",
    right: "5.33%",
    bottom: "55.66%",
    left: "5.33%",
  },
  hiUserText: {
    position: "absolute",
    height: "62.82%",
    width: "66.23%",
    top: "0%",
    right: "33.75%",
    bottom: "37.18%",
    left: "0.02%",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  withDataMakesAPTSafeAgai: {
    position: "absolute",
    height: "37.54%",
    width: "100%",
    top: "62.46%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  titleView1: {
    position: "absolute",
    height: "10.91%",
    width: "47.51%",
    top: "11.61%",
    right: "47.17%",
    bottom: "77.49%",
    left: "5.32%",
  },
  statusIcon: {
    position: "absolute",
    height: "8.37%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "91.63%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  avatarIcon: {
    position: "absolute",
    height: "6.85%",
    width: "9.6%",
    top: "9.68%",
    right: "5.6%",
    bottom: "83.47%",
    left: "84.8%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  maskGroup18: {
    position: "absolute",
    height: "64.71%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "35.29%",
    left: "0%",
  },
  groupView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  loremIpsumDolorSitAmetCo: {
    flex: 1,
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  frameView: {
    alignSelf: "stretch",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "#5d6470",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  tipIcon: {
    position: "relative",
    width: 9.8,
    height: 8,
    flexShrink: 0,
  },
  messageSend: {
    position: "absolute",
    height: "6.43%",
    width: "89.08%",
    top: "73.6%",
    right: "5.39%",
    bottom: "19.96%",
    left: "5.53%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  userIdCard: {
    position: "absolute",
    height: "2.84%",
    width: "6.14%",
    top: "90.35%",
    right: "9.9%",
    bottom: "6.81%",
    left: "83.96%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  footerhomeBackgroundIcon: {
    position: "absolute",
    height: "99.31%",
    width: "100%",
    top: "627.19%",
    right: "0%",
    bottom: "-626.5%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  unionIcon: {
    position: "absolute",
    height: "99.31%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0.69%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  unionIcon1: {
    position: "absolute",
    height: "99.31%",
    width: "100%",
    top: "0.69%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  safetyText: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  carLogView: {
    position: "absolute",
    height: "15.21%",
    width: "10.4%",
    top: "56.37%",
    right: "43.96%",
    bottom: "28.42%",
    left: "45.64%",
  },
  footeronBackgroundIcon: {
    position: "absolute",
    height: "90.77%",
    width: "99.98%",
    top: "1101.54%",
    right: "-93.9%",
    bottom: "-1092.31%",
    left: "93.92%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleIcon3: {
    position: "absolute",
    height: "3.08%",
    width: "78.77%",
    top: "0%",
    right: "12.14%",
    bottom: "96.92%",
    left: "9.09%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  homeText: {
    position: "absolute",
    height: "26.15%",
    width: "99.98%",
    top: "73.85%",
    right: "0%",
    bottom: "0%",
    left: "0.02%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#3d5cff",
    textAlign: "left",
  },
  iconfooterhomeon: {
    position: "absolute",
    height: "33.11%",
    width: "66.05%",
    top: "23.45%",
    right: "18.5%",
    bottom: "43.45%",
    left: "15.45%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  footeronView: {
    position: "absolute",
    height: "58.16%",
    width: "8.8%",
    top: "13.42%",
    right: "82.93%",
    bottom: "28.42%",
    left: "8.27%",
  },
  footeroffBackgroundIcon: {
    position: "absolute",
    height: "91.85%",
    width: "77.88%",
    top: "1114.71%",
    right: "-204.45%",
    bottom: "-1106.57%",
    left: "226.57%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  trafficText: {
    position: "absolute",
    height: "26.47%",
    width: "94.4%",
    top: "73.53%",
    right: "0%",
    bottom: "0%",
    left: "5.6%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  footeroffView: {
    position: "absolute",
    height: "57.47%",
    width: "11.3%",
    top: "13.42%",
    right: "63.1%",
    bottom: "29.11%",
    left: "25.6%",
  },
  footeroffBackgroundIcon1: {
    position: "absolute",
    height: "90.39%",
    width: "53.08%",
    top: "1096.96%",
    right: "-347.12%",
    bottom: "-1087.35%",
    left: "394.05%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  carLogText: {
    position: "absolute",
    height: "25.89%",
    width: "93.87%",
    top: "74.11%",
    right: "0%",
    bottom: "0%",
    left: "6.13%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  footeroffView1: {
    position: "absolute",
    height: "58.4%",
    width: "16.58%",
    top: "13.42%",
    right: "18.09%",
    bottom: "28.18%",
    left: "65.33%",
  },
  footeroffBackgroundIcon2: {
    position: "absolute",
    height: "90.77%",
    width: "12.93%",
    top: "1101.54%",
    right: "-34.43%",
    bottom: "-1092.31%",
    left: "121.5%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  accountText: {
    position: "absolute",
    height: "26.15%",
    width: "18.42%",
    top: "73.85%",
    right: "0%",
    bottom: "0%",
    left: "81.58%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  chartBarChart: {
    position: "absolute",
    height: "31.91%",
    width: "8.13%",
    top: "28.32%",
    right: "91.87%",
    bottom: "39.77%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  coolicon: {
    position: "absolute",
    height: "21.27%",
    width: "6.09%",
    top: "34.97%",
    right: "92.89%",
    bottom: "43.75%",
    left: "1.02%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconfooteraccountoff: {
    position: "absolute",
    height: "36.92%",
    width: "9.41%",
    top: "21.54%",
    right: "6.65%",
    bottom: "41.54%",
    left: "83.94%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  footeroffView2: {
    position: "absolute",
    height: "58.16%",
    width: "68.04%",
    top: "13.42%",
    right: "5.34%",
    bottom: "28.42%",
    left: "26.62%",
  },
  footerhomeView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  footerView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "13.75%",
    width: "4.61%",
    top: "32.64%",
    right: "26.99%",
    bottom: "53.61%",
    left: "68.4%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vectorIcon2: {
    position: "absolute",
    height: "21.99%",
    width: "5.53%",
    top: "29.89%",
    right: "47.17%",
    bottom: "48.11%",
    left: "47.31%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  footerView1: {
    position: "absolute",
    height: "13.76%",
    width: "100%",
    top: "86.33%",
    right: "0%",
    bottom: "-0.09%",
    left: "0%",
  },
  footerhomeBackgroundIcon1: {
    position: "absolute",
    height: "99.31%",
    width: "100%",
    top: "627.19%",
    right: "0%",
    bottom: "-626.5%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  unionIcon2: {
    position: "absolute",
    height: "99.31%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0.69%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  unionIcon3: {
    position: "absolute",
    height: "99.31%",
    width: "100%",
    top: "0.69%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  safetyText1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  carLogView1: {
    position: "absolute",
    height: "15.21%",
    width: "10.4%",
    top: "56.37%",
    right: "43.96%",
    bottom: "28.42%",
    left: "45.64%",
  },
  footeronBackgroundIcon1: {
    position: "absolute",
    height: "90.77%",
    width: "99.98%",
    top: "1101.54%",
    right: "-93.9%",
    bottom: "-1092.31%",
    left: "93.92%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleIcon4: {
    position: "absolute",
    height: "3.08%",
    width: "78.77%",
    top: "0%",
    right: "12.14%",
    bottom: "96.92%",
    left: "9.09%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  homeText1: {
    position: "absolute",
    height: "26.15%",
    width: "99.98%",
    top: "73.85%",
    right: "0%",
    bottom: "0%",
    left: "0.02%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#3d5cff",
    textAlign: "left",
  },
  iconfooterhomeon1: {
    position: "absolute",
    height: "33.11%",
    width: "66.05%",
    top: "23.45%",
    right: "18.5%",
    bottom: "43.45%",
    left: "15.45%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  footeronView1: {
    position: "absolute",
    height: "58.16%",
    width: "8.8%",
    top: "13.42%",
    right: "82.93%",
    bottom: "28.42%",
    left: "8.27%",
  },
  footeroffBackgroundIcon3: {
    position: "absolute",
    height: "91.85%",
    width: "77.88%",
    top: "1114.71%",
    right: "-204.45%",
    bottom: "-1106.57%",
    left: "226.57%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  trafficText1: {
    position: "absolute",
    height: "26.47%",
    width: "94.4%",
    top: "73.53%",
    right: "0%",
    bottom: "0%",
    left: "5.6%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  footeroffView3: {
    position: "absolute",
    height: "57.47%",
    width: "11.3%",
    top: "13.42%",
    right: "63.1%",
    bottom: "29.11%",
    left: "25.6%",
  },
  footeroffBackgroundIcon4: {
    position: "absolute",
    height: "90.39%",
    width: "53.08%",
    top: "1096.96%",
    right: "-347.12%",
    bottom: "-1087.35%",
    left: "394.05%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  carLogText1: {
    position: "absolute",
    height: "25.89%",
    width: "93.87%",
    top: "74.11%",
    right: "0%",
    bottom: "0%",
    left: "6.13%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  footeroffView4: {
    position: "absolute",
    height: "58.4%",
    width: "16.58%",
    top: "13.42%",
    right: "18.09%",
    bottom: "28.18%",
    left: "65.33%",
  },
  footeroffBackgroundIcon5: {
    position: "absolute",
    height: "90.77%",
    width: "12.93%",
    top: "1101.54%",
    right: "-34.43%",
    bottom: "-1092.31%",
    left: "121.5%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  accountText1: {
    position: "absolute",
    height: "26.15%",
    width: "18.42%",
    top: "73.85%",
    right: "0%",
    bottom: "0%",
    left: "81.58%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#b8b8d2",
    textAlign: "left",
  },
  chartBarChart1: {
    position: "absolute",
    height: "31.91%",
    width: "8.13%",
    top: "28.32%",
    right: "91.87%",
    bottom: "39.77%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  coolicon1: {
    position: "absolute",
    height: "21.27%",
    width: "6.09%",
    top: "34.97%",
    right: "92.89%",
    bottom: "43.75%",
    left: "1.02%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  footeroffView5: {
    position: "absolute",
    height: "58.16%",
    width: "68.04%",
    top: "13.42%",
    right: "5.34%",
    bottom: "28.42%",
    left: "26.62%",
  },
  footerhomeView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  footerView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  vectorIcon3: {
    position: "absolute",
    height: "13.75%",
    width: "4.61%",
    top: "32.64%",
    right: "26.99%",
    bottom: "53.61%",
    left: "68.4%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vectorIcon4: {
    position: "absolute",
    height: "21.99%",
    width: "5.53%",
    top: "29.89%",
    right: "47.17%",
    bottom: "48.11%",
    left: "47.31%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  footerView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  userIdCard1: {
    position: "absolute",
    height: "20.62%",
    width: "6.14%",
    top: "29.21%",
    right: "9.9%",
    bottom: "50.18%",
    left: "83.96%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  groupView3: {
    position: "absolute",
    height: "13.76%",
    width: "100%",
    top: "86.33%",
    right: "0%",
    bottom: "-0.09%",
    left: "0%",
  },
  homeView1: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 1057,
    overflow: "hidden",
  },
});

export default List_item;
