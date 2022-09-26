package vo;

import java.util.List;

import model.OrderItemBean;

public class OrderVo {
	private String oShippingAddress;
	private String oDestinationAddress;
	private Integer oFee;
	private Integer oPrice;
	private String oDeadLine;
	private String oOrderType;
	private String oComment;
	private List<OrderItemBean> item;
//	private List<String> favoriateColor;

	public OrderVo() {
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


	public List<OrderItemBean> getItem() {
		return item;
	}

	public void setItem(List<OrderItemBean> item) {
		this.item = item;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("OrderVo [oShippingAddress=");
		builder.append(oShippingAddress);
		builder.append(", oDestinationAddress=");
		builder.append(oDestinationAddress);
		builder.append(", oFee=");
		builder.append(oFee);
		builder.append(", oPrice=");
		builder.append(oPrice);
		builder.append(", oDeadLine=");
		builder.append(oDeadLine);
		builder.append(", oOrderType=");
		builder.append(oOrderType);
		builder.append(", oComment=");
		builder.append(oComment);
		builder.append(", item=");
		builder.append(item);
		builder.append("]");
		return builder.toString();
	}
	
	
}

