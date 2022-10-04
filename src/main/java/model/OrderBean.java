package model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class OrderBean {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer oId;
	private Integer mId;
	private String oShippingAddress;
	private String oDestinationAddress;
	private String oTime;
	private Integer oFee;
	private Integer oPrice;
	private String oDeadLine;
	private String oOrderType;
	private String oComment;
	private Integer oRanking;
	private String oOrderStatus;
	private Integer hId;

	public OrderBean() {
	}

	@OneToMany(mappedBy = "orderBean", cascade = CascadeType.ALL)
	List<OrderItemBean> items = new ArrayList<>();
	
	@ManyToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="MId")
	 MemberBean memberBean;

	public OrderBean(Integer oId, Integer mId, String oShippingAddress, String oDestinationAddress, String oTime,
			Integer oFee, Integer oPrice, String oDeadLine, String oOrderType, String oComment, Integer oRanking,
			String oOrderStatus, Integer hId, List<OrderItemBean> items, MemberBean memberBean) {
		this.oId = oId;
		this.mId = mId;
		this.oShippingAddress = oShippingAddress;
		this.oDestinationAddress = oDestinationAddress;
		this.oTime = oTime;
		this.oFee = oFee;
		this.oPrice = oPrice;
		this.oDeadLine = oDeadLine;
		this.oOrderType = oOrderType;
		this.oComment = oComment;
		this.oRanking = oRanking;
		this.oOrderStatus = oOrderStatus;
		this.hId = hId;
		this.items = items;
		this.memberBean = memberBean;
	}

	public Integer getoId() {
		return oId;
	}

	public void setoId(Integer oId) {
		this.oId = oId;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
	}

	public String getoShippingAddress() {
		return oShippingAddress;
	}

	public void setoShippingAddress(String oShippingAddress) {
		this.oShippingAddress = oShippingAddress;
	}

	public String getoDestinationAddress() {
		return oDestinationAddress;
	}

	public void setoDestinationAddress(String oDestinationAddress) {
		this.oDestinationAddress = oDestinationAddress;
	}

	public String getoTime() {
		return oTime;
	}

	public void setoTime(String oTime) {
		this.oTime = oTime;
	}

	public Integer getoFee() {
		return oFee;
	}

	public void setoFee(Integer oFee) {
		this.oFee = oFee;
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

	public String getoOrderType() {
		return oOrderType;
	}

	public void setoOrderType(String oOrderType) {
		this.oOrderType = oOrderType;
	}

	public String getoComment() {
		return oComment;
	}

	public void setoComment(String oComment) {
		this.oComment = oComment;
	}

	public Integer getoRanking() {
		return oRanking;
	}

	public void setoRanking(Integer oRanking) {
		this.oRanking = oRanking;
	}

	public String getoOrderStatus() {
		return oOrderStatus;
	}

	public void setoOrderStatus(String oOrderStatus) {
		this.oOrderStatus = oOrderStatus;
	}

	public Integer gethId() {
		return hId;
	}

	public void sethId(Integer hId) {
		this.hId = hId;
	}

	public List<OrderItemBean> getItems() {
		return items;
	}

	public void setItems(List<OrderItemBean> items) {
		this.items = items;
	}

	public MemberBean getMemberBean() {
		return memberBean;
	}

	public void setMemberBean(MemberBean memberBean) {
		this.memberBean = memberBean;
	}

	
}
