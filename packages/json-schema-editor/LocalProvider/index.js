const langs = {
	en_US: {
		'title': 'Title',
		'import_json': 'Import JSON',
		'base_setting': 'Base Setting',
		'all_setting': 'Source Code',
		'default': 'Default',
		'param_value': 'Param Value',
		'value_type': 'Value Type',
		'description':'Description',
		"adv_setting": "Advanced Settings",
		"add_child_node": "Add child node",
		'add_sibling_node': 'Add sibling nodes',
		'add_node':'Add sibling/child nodes',
		'remove_node': 'Remove node',
		'child_node': 'Child node',
		'sibling_node':'Sibling node',
		'ok':'OK',
		'cancel':'Cancel',
		'minLength':'Min length',
		'maxLength': 'Max length',
		'pattern':'Must be a valid regular expression.',
		'exclusiveMinimum': 'Value strictly less than',
		'exclusiveMaximum':  'Value strictly more than',
		'minimum': 'Min',
		'maximum': 'Max',
		'uniqueItems': 'Unique Items',
		'minItems':'MinItems',
		'maxItems': 'MaxItems',
		'minProperties':'MinProperties',
		'maxProperties': 'MaxProperties',
		'checked_all': 'Checked All',
		'valid_json': 'Not valid json',
		'enum': 'Enum',
		'enum_msg': 'One value per line',
		'enum_desc': 'desc',
		'enum_desc_msg': 'enum description',
		'required': 'Required',
		'mock': 'mock',
		'mockLink': 'Help',
		'format': 'Format',
		'nothing': 'Nothing',
		'preview': 'Preview',
		'add_custom': 'Add Custom Prop',
	},
	zh_CN: {
		'title': '名称',
		'import_json': '导入 json',
		'base_setting': '基础设置',
		'all_setting': '编辑源码',
		'default': '默认值',
		'param_value': '参数取值',
		'value_type': '取值方式',
		'description':'描述',
		'adv_setting': '高级设置',
		"add_child_node": "添加子节点",
		'add_sibling_node': '添加兄弟节点',
		'add_node':'添加兄弟/子节点',
		'remove_node': '删除节点',
		'child_node': '子节点',
		'sibling_node':'兄弟节点',
		'ok':'确定',
		'cancel':'取消',
		'minLength':'最小长度',
		'maxLength': '最大长度',
		'pattern': '用正则表达式约束字符串',
		'exclusiveMinimum': '开启后，数据必须大于最小值',
		'exclusiveMaximum': '开启后，数据必须小于最大值',
		'minimum': '最小值',
		'maximum': '最大值',
		'uniqueItems': '开启后，每个元素都不相同',
		'minItems':'最小元素个数',
		'maxItems': '最大元素个数',
		'minProperties':'最小元素个数',
		'maxProperties': '最大元素个数',
		'checked_all': '全选',
		'valid_json': '不是合法的json字符串',
		'enum': '枚举',
		'enum_msg': '每行写一个值',
		'enum_desc': '备注',
		'enum_desc_msg': '备注描述信息',
		'required': '是否必须',
		'mock': 'mock',
		'mockLink': '查看文档',
		'format': '格式化',
		'nothing': '无',
		'preview': '预览',
		'add_custom': '添加自定义属性'
	}
}

export default (lang) => {
	return langs[lang]
}
