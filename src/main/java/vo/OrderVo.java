package vo;

import java.util.List;

import model.OrderItemBean;

public class OrderVo {
	private Integer oId;
	private String oShippingAddress;
	private String oDestinationAddress;
	private Integer oFee;
	private Integer oPrice;
	private Integer oRanking;
	private String oDeadLine;
	private String oOrderType;
	private String oComment;
	private String oOrderStatus;
	private List<OrderItemBean> item;

	public OrderVo() {
	}

	public Integer getoId() {
		return oId;
	}

	public void setoId(Integer oId) {
		this.oId = oId;
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

	public Integer getoRanking() {
		return oRanking;
	}

	public void setoRanking(Integer oRanking) {
		this.oRanking = oRanking;
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

	public String getoOrderStatus() {
		return oOrderStatus;
	}

	public void setoOrderStatus(String oOrderStatus) {
		this.oOrderStatus = oOrderStatus;
	}

	public List<OrderItemBean> getItem() {
		return item;
	}

	public void setItem(List<OrderItemBean> item) {
		this.item = item;
	}

	@Override
	public String toString() {
		return "OrderVo [oId=" + oId + ", oShippingAddress=" + oShippingAddress + ", oDestinationAddress="
				+ oDestinationAddress + ", oFee=" + oFee + ", oPrice=" + oPrice + ", oRanking=" + oRanking
				+ ", oDeadLine=" + oDeadLine + ", oOrderType=" + oOrderType + ", oComment=" + oComment
				+ ", oOrderStatus=" + oOrderStatus + ", item=" + item + "]";
	}

	
}
