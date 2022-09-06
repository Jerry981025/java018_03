package model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "order")
public class OrderBean implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer member_MId;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "OId")
	private Integer oId;
	private String oAddress;
	private java.util.Date OTime;
	private String oBrand;
	private String oDetail;
	private Integer oQuantity;
	private Integer oPrice;
	private String oDeadLine;
	private String oPic;
	private Double oFee;
	private String oRanking;
	private String oLat;
	private String oLng;
	
	public OrderBean() {
	}

	public OrderBean(Integer member_MId, Integer oId, String oAddress, Date oTime, String oBrand, String oDetail,
			Integer oQuantity, Integer oPrice, String oDeadLine, String oPic, Double oFee, String oRanking, String oLat,
			String oLng) {
		this.member_MId = member_MId;
		this.oId = oId;
		this.oAddress = oAddress;
		this.OTime = oTime;
		this.oBrand = oBrand;
		this.oDetail = oDetail;
		this.oQuantity = oQuantity;
		this.oPrice = oPrice;
		this.oDeadLine = oDeadLine;
		this.oPic = oPic;
		this.oFee = oFee;
		this.oRanking = oRanking;
		this.oLat = oLat;
		this.oLng = oLng;
	}

	public Integer getMember_MId() {
		return member_MId;
	}

	public void setMember_MId(Integer member_MId) {
		this.member_MId = member_MId;
	}

	public Integer getoId() {
		return oId;
	}

	public void setoId(Integer oId) {
		this.oId = oId;
	}

	public String getoAddress() {
		return oAddress;
	}

	public void setoAddress(String oAddress) {
		this.oAddress = oAddress;
	}

	public java.util.Date getOTime() {
		return OTime;
	}

	public void setOTime(java.util.Date oTime) {
		OTime = oTime;
	}

	public String getoBrand() {
		return oBrand;
	}

	public void setoBrand(String oBrand) {
		this.oBrand = oBrand;
	}

	public String getoDetail() {
		return oDetail;
	}

	public void setoDetail(String oDetail) {
		this.oDetail = oDetail;
	}

	public Integer getoQuantity() {
		return oQuantity;
	}

	public void setoQuantity(Integer oQuantity) {
		this.oQuantity = oQuantity;
	}

	public Integer getoPrice() {
		return oPrice;
	}

	public void setoPrice(Integer oPrice) {
		this.oPrice = oPrice;
	}

	public String getoDeadLine() {
		return oDeadLine;
	}

	public void setoDeadLine(String oDeadLine) {
		this.oDeadLine = oDeadLine;
	}

	public String getoPic() {
		return oPic;
	}

	public void setoPic(String oPic) {
		this.oPic = oPic;
	}

	public Double getoFee() {
		return oFee;
	}

	public void setoFee(Double oFee) {
		this.oFee = oFee;
	}

	public String getoRanking() {
		return oRanking;
	}

	public void setoRanking(String oRanking) {
		this.oRanking = oRanking;
	}

	public String getoLat() {
		return oLat;
	}

	public void setoLat(String oLat) {
		this.oLat = oLat;
	}

	public String getoLng() {
		return oLng;
	}

	public void setoLng(String oLng) {
		this.oLng = oLng;
	}

	@Override
	public String toString() {
		return "OrderBean [member_MId=" + member_MId + ", oId=" + oId + ", oAddress=" + oAddress + ", OTime=" + OTime
				+ ", oBrand=" + oBrand + ", oDetail=" + oDetail + ", oQuantity=" + oQuantity + ", oPrice=" + oPrice
				+ ", oDeadLine=" + oDeadLine + ", oPic=" + oPic + ", oFee=" + oFee + ", oRanking=" + oRanking
				+ ", oLat=" + oLat + ", oLng=" + oLng + "]";
	}
	
	
}
